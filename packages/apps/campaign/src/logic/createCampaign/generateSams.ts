import * as DcsJs from "@foxdelta2/dcsjs";
import { DataStore } from "@kilcekru/dcc-shared-rpc-types";
import { createUniqueId } from "solid-js";

import { Scenario } from "../../data/scenarios";
import { firstItem, random, randomItem } from "../../utils";

export const generateSams = (
	coalition: DcsJs.CampaignCoalition,
	faction: DcsJs.CampaignFaction,
	dataStore: DataStore,
	scenario: Scenario
) => {
	if (coalition === "neutral") {
		return;
	}

	const samTemplate = dataStore.samTemplates?.[(firstItem(faction.template.sams) ?? "SA-2") as DcsJs.SAMType];

	if (samTemplate == null) {
		return;
	}

	const templateVehicles =
		samTemplate?.units.reduce((prev, name) => {
			const vehicle = dataStore.vehicles?.[name];

			if (vehicle == null) {
				// eslint-disable-next-line no-console
				console.error("vehicle not found", name);
				return prev;
			}

			const id = createUniqueId();
			const unit: DcsJs.CampaignUnit = {
				alive: true,
				id,
				state: "on objective",
				displayName: `${vehicle.name}|${id}`,
				category: vehicle.category,
				name: vehicle.name,
				vehicleTypes: vehicle.vehicleTypes,
			};

			return [...prev, unit];
		}, [] as Array<DcsJs.CampaignUnit>) ?? [];

	if (dataStore.airdromes == null) {
		throw "Unknown strike targets";
	}

	const strikeTargets = dataStore.strikeTargets;

	if (strikeTargets == null) {
		throw "Unknown strike targets";
	}

	const airdromes = dataStore.airdromes;

	if (airdromes == null) {
		throw "Unknown airdromes";
	}

	const selectedTargets: DcsJs.StrikeTarget[] = [];

	scenario[coalition].samNames.forEach((name) => {
		const targets = strikeTargets[name];

		if (targets == null) {
			return;
		}

		const samTargets = targets.filter((target) => target.type === "SAM");

		const selectedTarget = randomItem(samTargets);

		if (selectedTarget == null) {
			return;
		}

		selectedTargets.push(selectedTarget);
	});

	const units = Object.values(faction.inventory.groundUnits)
		.filter((unit) => unit.vehicleTypes.some((vt) => vt === "SHORAD") && unit.state === "idle")
		.slice(0, random(1, 2));

	units.forEach((unit) => {
		const inventoryUnit = faction.inventory.groundUnits[unit.id];

		if (inventoryUnit == null) {
			return;
		}

		inventoryUnit.state = "on objective";
		templateVehicles.push(unit);
	});

	faction.sams = selectedTargets.map((sam) => {
		const objectiveTarget = Object.entries(strikeTargets).find(([, targets]) =>
			targets.some((target) => target.name === sam.name)
		);

		if (objectiveTarget == null) {
			throw "no objective target found";
		}

		return {
			id: createUniqueId(),
			position: sam.position,
			range: samTemplate.range,
			units: templateVehicles,
			operational: true,
			fireInterval: samTemplate.fireInterval,
			weaponReadyTimer: 0,
			name: sam.name,
			objectiveName: objectiveTarget[0],
		};
	});
};
