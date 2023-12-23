import type * as Types from "@kilcekru/dcc-shared-types";

import { Events } from "../../utils";
import { Unit, UnitProps } from "./Unit";

export interface GroundUnitProps extends Omit<UnitProps, "queries"> {
	name: string;
	category: Types.Campaign.GroundUnitCategory;
}
export class GroundUnit extends Unit<keyof Events.EventMap.GroundUnit> {
	public readonly name: string;
	public readonly category: Types.Campaign.GroundUnitCategory;

	private constructor(args: GroundUnitProps) {
		super({ ...args, queries: new Set(["groundUnits"]) });
		this.name = args.name;
		this.category = args.category;
	}

	static create(args: GroundUnitProps) {
		return new GroundUnit(args);
	}

	override toJSON(): Types.Campaign.GroundUnitItem {
		return {
			...super.toJSON(),
			name: this.name,
			category: this.category,
			alive: this.alive,
		};
	}
}