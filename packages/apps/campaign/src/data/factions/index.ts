import * as Types from "@kilcekru/dcc-shared-types";

import * as france82 from "./france-1982.json";
import * as israel67 from "./israel-1967.json";
import * as russia55 from "./russia-1955.json";
import * as russia71 from "./russia-1971.json";
import * as russia84 from "./russia-1984.json";
import * as russia96 from "./russia-1996.json";
import * as sweden70 from "./sweden-1970.json";
import * as usnavy64 from "./us-navy-1964.json";
import * as usnavy87 from "./us-navy-1987.json";
import * as usa52 from "./usa-1952.json";
import * as usa72 from "./usa-1972.json";
import * as usa77 from "./usa-1977.json";
import * as usa04 from "./usa-2004.json";

import * as belka95 from "./belka-1995.json";
import * as ustio95 from "./ustio-1995.json";
import * as isaf04 from "./isaf-2004.json";
import * as erusea04 from "./erusea-2004.json";
import * as isaf05 from "./isaf-2005.json";
import * as erusea05 from "./erusea-2005.json";
import * as osea10 from "./osea-2010.json";
import * as yuktobania10 from "./yuktobania-2010.json";
import * as osea19 from "./osea-2019.json";
import * as erusea19 from "./erusea-2019.json";

export const factionList: Array<Types.Campaign.Faction> = [
	Types.Campaign.Schema.faction.parse(usa52),
	Types.Campaign.Schema.faction.parse(russia55),
	Types.Campaign.Schema.faction.parse(usnavy64),
	Types.Campaign.Schema.faction.parse(israel67),
	Types.Campaign.Schema.faction.parse(sweden70),
	Types.Campaign.Schema.faction.parse(russia71),
	Types.Campaign.Schema.faction.parse(usa72),
	Types.Campaign.Schema.faction.parse(usa77),
	Types.Campaign.Schema.faction.parse(france82),
	Types.Campaign.Schema.faction.parse(russia84),
	Types.Campaign.Schema.faction.parse(usnavy87),
	Types.Campaign.Schema.faction.parse(russia96),
	Types.Campaign.Schema.faction.parse(usa04),
	Types.Campaign.Schema.faction.parse(belka95),
	Types.Campaign.Schema.faction.parse(ustio95),
	Types.Campaign.Schema.faction.parse(isaf04),
	Types.Campaign.Schema.faction.parse(erusea04),
	Types.Campaign.Schema.faction.parse(isaf05),
	Types.Campaign.Schema.faction.parse(erusea05),
	Types.Campaign.Schema.faction.parse(osea10),
	Types.Campaign.Schema.faction.parse(yuktobania10),
	Types.Campaign.Schema.faction.parse(osea19),
	Types.Campaign.Schema.faction.parse(erusea19),
];
