import * as Types from "@kilcekru/dcc-shared-types";


import * as bunkerShot from "./bunker-shot";

export const scenarioList: Array<Types.Campaign.Scenario> = [
	Types.Campaign.Schema.scenario.parse(bunkerShot)
];
