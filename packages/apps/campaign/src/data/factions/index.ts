import * as Types from "@kilcekru/dcc-shared-types";

import * as usa04 from "./usa-2004.json";
import * as russia96 from "./russia-1996.json";
import * as belka95 from "./belka-1995.json";
import * as ustio95 from "./ustio-1995.json";
import * as isaf04 from "./isaf-2004.json";
import * as isaf05 from "./isaf-2005.json";
import * as erusea04 from "./erusea-2004.json";
import * as erusea05 from "./erusea-2005.json";
import * as osea10 from "./osea-2010.json";
import * as yuke10 from "./yuktobania-2010.json";
import * as osea19 from "./osea-2019.json";
import * as erusea19 from "./erusea-2019.json";

export const factionList: Array<Types.Campaign.Faction> = [
	Types.Campaign.Schema.faction.parse(usa04),
	Types.Campaign.Schema.faction.parse(russia96),
	Types.Campaign.Schema.faction.parse(belka95),
	Types.Campaign.Schema.faction.parse(erusea04),
	Types.Campaign.Schema.faction.parse(erusea05),
	Types.Campaign.Schema.faction.parse(erusea19),
	Types.Campaign.Schema.faction.parse(isaf04),
	Types.Campaign.Schema.faction.parse(isaf05),
	Types.Campaign.Schema.faction.parse(osea10),
	Types.Campaign.Schema.faction.parse(osea19),
	Types.Campaign.Schema.faction.parse(ustio95),
	Types.Campaign.Schema.faction.parse(yuke10),
];
