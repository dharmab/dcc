import * as Types from "@kilcekru/dcc-shared-types";
import * as bunkerShot from "./bunker-shot.json";
import * as redBullet from "./red-bullet.json";

export const scenarioList: Array<Types.Campaign.Scenario> = [
	Types.Campaign.Schema.scenario.parse(bunkerShot),
	Types.Campaign.Schema.scenario.parse(redBullet),
];
