import * as bunkerShot from "./bunker-shot.json";
import * as emancipation from "./emancipation.json";

export type StructurePlan = {
	structureName: string;
	structureType: string;
};
export type ObjectivePlan = {
	objectiveName: string;
	structures: Array<StructurePlan>;
	groundUnitTypes: Array<string>;
};
export type ScenarioCoalition = {
	airdromeNames: Array<string>;
	carrierObjective?: string;
	objectivePlans: Array<ObjectivePlan>;
};
export type Scenario = {
	map: string;
	id: string;
	available: boolean;
	name: string;
	era: string;
	date: string;
	briefing: string;
	"blue-start-objective-range": [number, number];
	"win-condition":
	| {
		type: "ground units";
	}
	| {
		type: "objective";
		value: string;
	};
	blue: ScenarioCoalition;
	red: ScenarioCoalition;
};

export const scenarioList: Array<Scenario> = [
	bunkerShot as unknown as Scenario,
	emancipation as unknown as Scenario,
];