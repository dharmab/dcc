import type * as DcsJs from "@foxdelta2/dcsjs";

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

export const factionList: Array<DcsJs.Faction> = [
	belka95,
	erusea04,
	erusea05,
	erusea19,
	isaf04,
	isaf05,
	osea10,
	osea19,
	ustio95,
	yuke10,
];
