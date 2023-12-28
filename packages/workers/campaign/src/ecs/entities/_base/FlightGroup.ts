import type * as DcsJs from "@foxdelta2/dcsjs";
import type * as Types from "@kilcekru/dcc-shared-types";
import * as Utils from "@kilcekru/dcc-shared-utils";

import { Events, Serialization } from "../../../utils";
import { WaypointTemplate } from "../../objects/waypoint";
import { getEntity, QueryKey, store } from "../../store";
import { generateCallSign } from "../../utils";
import type { Aircraft } from "../Aircraft";
import { Flightplan } from "../Flightplan";
import { type Package } from "../Package";
import { Group, GroupProps } from "./Group";
import type { HomeBase } from "./HomeBase";

export interface FlightGroupProps extends Omit<GroupProps, "queries" | "name"> {
	task: DcsJs.Task;
	package: Package;
	aircraftIds: Types.Campaign.Id[];
	homeBase: HomeBase;
	taskWaypoints: Array<WaypointTemplate>;
}

export type A2ACombat = {
	type: "a2a";
	targetId: Types.Campaign.Id;
	cooldownTime: number;
};

export abstract class FlightGroup<EventNames extends keyof Events.EventMap.All = never> extends Group<
	EventNames | keyof Events.EventMap.FlightGroup
> {
	readonly #aircraftIds: Types.Campaign.Id[];
	public readonly task: DcsJs.Task;
	readonly #flightplanId: Types.Campaign.Id;
	public readonly startTime: number;
	public readonly homeBaseId: Types.Campaign.Id;
	public combat: A2ACombat | undefined;
	#packageId: Types.Campaign.Id;

	get aircrafts(): readonly Aircraft[] {
		const aircrafts: Aircraft[] = [];

		for (const id of this.#aircraftIds) {
			const aircraft = getEntity<Aircraft>(id);

			aircrafts.push(aircraft);
		}

		return aircrafts;
	}

	get aliveAircrafts(): readonly Aircraft[] {
		return this.aircrafts.filter((aircraft) => aircraft.alive);
	}

	get package() {
		return getEntity<Package>(this.#packageId);
	}

	get flightplan() {
		return getEntity<Flightplan>(this.#flightplanId);
	}

	get isInCombat(): boolean {
		return this.combat != null;
	}

	get a2aRange(): number {
		let maxRange = 0;

		for (const aircraft of this.aircrafts) {
			const range = aircraft.a2aRange;

			if (range > maxRange) {
				maxRange = range;
			}
		}

		return maxRange;
	}

	get a2aTarget(): FlightGroup | undefined {
		if (this.combat == null) {
			return undefined;
		}

		return getEntity<FlightGroup>(this.combat.targetId);
	}

	get homeBase(): HomeBase {
		return getEntity<HomeBase>(this.homeBaseId);
	}

	protected constructor(args: FlightGroupProps | Types.Serialization.FlightGroupSerialized) {
		const cs = Serialization.isSerialized(args) ? undefined : generateCallSign(args.coalition, "aircraft");
		const superArgs: GroupProps | Types.Serialization.GroupSerialized = Serialization.isSerialized(args)
			? args
			: { ...args, queries: [`flightGroups-${args.task}` as QueryKey], name: cs?.flightGroupName ?? "" };
		super(superArgs);

		this.task = args.task;
		this.#aircraftIds = args.aircraftIds;

		if (Serialization.isSerialized(args)) {
			this.#packageId = args.packageId;
			this.homeBaseId = args.homeBaseId;
			this.startTime = args.startTime;
			this.#flightplanId = args.flightplanId;
		} else {
			this.#packageId = args.package.id;
			this.homeBaseId = args.homeBase.id;
			this.startTime = Utils.DateTime.toFullMinutes(store.time + Utils.DateTime.Minutes(Utils.Random.number(15, 25)));

			args.aircraftIds.forEach((aircraftId, i) => {
				const aircraft = getEntity<Aircraft>(aircraftId);
				aircraft.addToFlightGroup({
					id: this.id,
					task: args.task,
					callSign: cs?.unitCallSign(i) ?? {
						"1": 1,
						"2": 2,
						"3": 3,
						name: "",
					},
					name: cs?.unitName(i) ?? "",
				});
			});

			this.#flightplanId = Flightplan.create({
				...args,
				flightGroup: this,
				taskWaypoints: args.taskWaypoints,
			}).id;
		}
	}

	takeOff() {
		this.addToQuery("mapEntities");
	}

	land() {
		this.destructor();
	}

	move(worldDelta: number) {
		if (this.isInCombat && this.combat != null && this.a2aTarget != null) {
			const distance = Utils.Location.distanceToPosition(this.position, this.a2aTarget.position);

			let speed = 300;
			let heading = Utils.Location.headingToPosition(this.position, this.a2aTarget.position);

			if (distance < 2_000) {
				speed = 150;

				heading = Utils.Location.addHeading(heading, 90);
			}

			const distanceTraveled = Math.round(Utils.DateTime.toSeconds(worldDelta) * speed);
			this.position = Utils.Location.positionFromHeading(this.position, heading, distanceTraveled);
		} else {
			const target = this.flightplan.currentWaypoint;

			if (target == null) {
				// eslint-disable-next-line no-console
				console.warn("no target found for flight group", this);
				return;
			}

			if (target.isRacetrack && target.isActive) {
				if (target.racetrack == null || target.duration == null) {
					throw new Error("no racetrack found for waypoint");
				}

				// Calculate the distance between the racetrack points
				const racetrackDistance = Utils.Location.distanceToPosition(target.position, target.racetrack.position);
				const distancesAlreadyFlown =
					Utils.DateTime.toSeconds(store.time - target.arrivalTime) * this.package.cruiseSpeed;

				const racetrackRounds = Math.floor(distancesAlreadyFlown / racetrackDistance);

				// If the racetrack rounds are even, the flight group is heading to the racetrack start
				const raceTrackHeading =
					racetrackRounds % 2 === 0
						? Utils.Location.headingToPosition(target.position, target.racetrack.position)
						: Utils.Location.headingToPosition(target.racetrack.position, target.position);
				const distanceTraveled = Math.round(Utils.DateTime.toSeconds(worldDelta) * this.package.cruiseSpeed);
				this.position = Utils.Location.positionFromHeading(this.position, raceTrackHeading, distanceTraveled);
			} else {
				const heading = Utils.Location.headingToPosition(this.position, target.position);
				const distance = Utils.Location.distanceToPosition(this.position, target.position);

				// How long in seconds till the flight group arrives at the waypoint
				const timeTillArrival = this.flightplan.arrivalTime - store.time;
				// Calculate the speed in meters per second to reach the waypoint in time
				const speed = distance / Utils.DateTime.toSeconds(timeTillArrival);
				// Calculate the distance traveled in meters in the tick
				const distanceTraveled = Math.round(Utils.DateTime.toSeconds(worldDelta) * speed);
				// Calculate the new position
				this.position = Utils.Location.positionFromHeading(this.position, heading, distanceTraveled);
			}
		}
	}

	engageA2A(enemy: FlightGroup) {
		this.combat = {
			type: "a2a",
			targetId: enemy.id,
			cooldownTime: store.time,
		};
	}

	fireA2A(distance: number) {
		if (this.combat == null || this.a2aTarget == null) {
			throw new Error("combat is null");
		}

		aircraftLoop: for (const aircraft of this.aircrafts) {
			const a2aWeapons = aircraft.a2aWeapons;

			for (const weapon of a2aWeapons.values()) {
				if (weapon.count > 0) {
					if (distance < weapon.item.range * Utils.Config.combat.a2a.rangeMultiplier) {
						weapon.count -= 1;

						// Does the missile hit?
						const distanceFactor = 1 - distance / weapon.item.range;

						if (Utils.Random.number(1, 100) <= 100 * distanceFactor) {
							// eslint-disable-next-line no-console
							console.log("fire", weapon.item.name, "at", this.a2aTarget.name, "from", this.name);

							this.combat.cooldownTime = store.time + Utils.Config.combat.a2a.cooldownDuration;

							// TODO
							/* const flightGroupDestroyed = this.combat.target.destroyAircraft();

							if (flightGroupDestroyed) {
								this.combat = undefined;
							} */

							break aircraftLoop;
						} else {
							// eslint-disable-next-line no-console
							console.log("miss", weapon.item.name, "at", this.a2aTarget.name, "from", this.name);
						}
					}
				}
			}
		}
	}

	setClient(count: number) {
		this.aircrafts.forEach((aircraft, i) => {
			aircraft.isClient = i < count;
		});
	}

	/**
	 * Destroy an aircraft in the flight group
	 *
	 * @returns true if the all aircraft within the flight group was destroyed
	 */
	destroyAircraft() {
		const [aircraft] = this.aliveAircrafts;

		if (aircraft == null) {
			throw new Error("aircraft is null");
		}

		aircraft.destroy();
	}

	override destructor(): void {
		// eslint-disable-next-line no-console
		console.log("destructor flight group", this.name);
		super.destructor();
		this.package.removeFlightGroup(this);
	}

	override toMapJSON(): Types.Campaign.FlightGroupMapItem {
		return {
			...super.toMapJSON(),
			position: this.position,
			type: "flightGroup",
			coalition: this.coalition,
			task: this.task,
			id: this.id,
		};
	}

	public override serialize(): Types.Serialization.FlightGroupSerialized {
		return {
			...super.serialize(),
			aircraftIds: this.#aircraftIds,
			homeBaseId: this.homeBaseId,
			task: this.task,
			startTime: this.startTime,
			packageId: this.#packageId,
			combat: this.combat,
			flightplanId: this.#flightplanId,
		};
	}
}
