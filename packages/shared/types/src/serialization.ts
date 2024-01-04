import { z } from "zod";

namespace Schema {
	export const coalition = z.enum(["blue", "red", "neutrals"]);
	export const position = z.object({ x: z.number(), y: z.number() });
	export const task = z.enum([
		"DEAD",
		"SEAD",
		"AWACS",
		"CAP",
		"Escort",
		"Pinpoint Strike",
		"CAS",
		"CSAR",
		"Air Assault",
	]);
	export const structureType = z.enum([
		"Ammo Depot",
		"Farp",
		"Command Center",
		"Power Plant",
		"Fuel Storage",
		"Hospital",
		"Prison",
		"Barrack",
		"Depot",
	]);
	export const aircraftType = z.enum([
		"Tornado GR4",
		"Tornado IDS",
		"F/A-18A",
		"F/A-18C",
		"F-14A",
		"Tu-22M3",
		"F-4E",
		"B-52H",
		"MiG-27K",
		"Su-27",
		"MiG-23MLD",
		"Su-25",
		"Su-25TM",
		"Su-25T",
		"Su-33",
		"MiG-25PD",
		"MiG-25RBT",
		"Su-30",
		"Su-17M4",
		"MiG-31",
		"Tu-95MS",
		"Su-24M",
		"Su-24MR",
		"Tu-160",
		"F-117A",
		"B-1B",
		"S-3B",
		"S-3B Tanker",
		"Mirage 2000-5",
		"Mirage-F1CE",
		"Mirage-F1EE",
		"F-15C",
		"F-15E",
		"F-15ESE",
		"MiG-29A",
		"MiG-29G",
		"MiG-29S",
		"Tu-142",
		"C-130",
		"An-26B",
		"An-30M",
		"C-17A",
		"A-50",
		"E-3A",
		"IL-78M",
		"E-2C",
		"IL-76MD",
		"F-16C bl.50",
		"F-16C bl.52d",
		"F-16A",
		"F-16A MLU",
		"RQ-1A Predator",
		"Yak-40",
		"KC-135",
		"FW-190D9",
		"FW-190A8",
		"Bf-109K-4",
		"SpitfireLFMkIX",
		"SpitfireLFMkIXCW",
		"P-51D",
		"P-51D-30-NA",
		"P-47D-30",
		"P-47D-30bl1",
		"P-47D-40",
		"MosquitoFBMkVI",
		"Ju-88A4",
		"A-20G",
		"A-4E-C",
		"A-10A",
		"A-10C",
		"A-10C_2",
		"AJS37",
		"AV8BNA",
		"KC130",
		"KC135MPRS",
		"C-101EB",
		"C-101CC",
		"J-11A",
		"JF-17",
		"KJ-2000",
		"WingLoong-I",
		"H-6J",
		"Christen Eagle II",
		"F-16C_50",
		"F-5E",
		"F-5E-3",
		"F-86F Sabre",
		"F-14B",
		"F-14A-135-GR",
		"FA-18C_hornet",
		"Hawk",
		"I-16",
		"L-39C",
		"L-39ZA",
		"M-2000C",
		"MB-339A",
		"MB-339APAN",
		"MQ-9 Reaper",
		"MiG-15bis",
		"MiG-19P",
		"MiG-21Bis",
		"Su-34",
		"TF-51D",
		"Mi-24V",
		"Mi-8MT",
		"Mi-26",
		"Ka-27",
		"UH-60A",
		"UH-60L",
		"CH-53E",
		"CH-47D",
		"SH-3W",
		"AH-64A",
		"AH-64D",
		"AH-1W",
		"SH-60B",
		"UH-1H",
		"Mi-28N",
		"OH-58D",
		"AH-64D_BLK_II",
		"Ka-50",
		"Ka-50_3",
		"Mi-24P",
		"SA342M",
		"SA342L",
		"SA342Mistral",
		"SA342Minigun",
		"VSN_F4B",
		"VSN_F4C",
		"SK-60",
	]);
	export const groundUnitType = z.enum([
		"2B11 mortar",
		"SAU Gvozdika",
		"SAU Msta",
		"SAU Akatsia",
		"SAU 2-C9",
		"M-109",
		"SpGH_Dana",
		"AAV7",
		"BMD-1",
		"BMP-1",
		"BMP-2",
		"BMP-3",
		"BRDM-2",
		"BTR_D",
		"Cobra",
		"LAV-25",
		"M1043 HMMWV Armament",
		"M1045 HMMWV TOW",
		"M1126 Stryker ICV",
		"M-113",
		"M1134 Stryker ATGM",
		"M-2 Bradley",
		"MCV-80",
		"MTLB",
		"Marder",
		"TPZ",
		"Grad_FDDM",
		"Bunker",
		"Paratrooper RPG-16",
		"Paratrooper AKS-74",
		"Infantry AK Ins",
		"Sandbox",
		"Soldier AK",
		"Infantry AK",
		"Soldier M249",
		"Soldier M4",
		"Soldier M4 GRG",
		"Soldier RPG",
		"MLRS FDDM",
		"Infantry AK ver2",
		"Infantry AK ver3",
		"Grad-URAL",
		"Uragan_BM-27",
		"Smerch",
		"Smerch_HE",
		"MLRS",
		"2S6 Tunguska",
		"Kub 2P25 ln",
		"5p73 s-125 ln",
		"S-300PS 5P85C ln",
		"S-300PS 5P85D ln",
		"SA-11 Buk LN 9A310M1",
		"Osa 9A33 ln",
		"Tor 9A331",
		"Strela-10M3",
		"Strela-1 9P31",
		"SA-11 Buk CC 9S470M1",
		"Patriot AMG",
		"Patriot ECS",
		"Gepard",
		"Hawk pcp",
		"Vulcan",
		"Hawk ln",
		"M48 Chaparral",
		"M6 Linebacker",
		"Patriot ln",
		"M1097 Avenger",
		"Patriot EPP",
		"Patriot cp",
		"Roland ADS",
		"S-300PS 54K6 cp",
		"Soldier stinger",
		"Stinger comm dsr",
		"Stinger comm",
		"ZSU-23-4 Shilka",
		"ZU-23 Emplacement Closed",
		"ZU-23 Emplacement",
		"Ural-375 ZU-23",
		"ZU-23 Closed Insurgent",
		"Ural-375 ZU-23 Insurgent",
		"ZU-23 Insurgent",
		"SA-18 Igla manpad",
		"SA-18 Igla comm",
		"SA-18 Igla-S manpad",
		"SA-18 Igla-S comm",
		"Igla manpad INS",
		"1L13 EWR",
		"Kub 1S91 str",
		"S-300PS 40B6M tr",
		"S-300PS 40B6MD sr",
		"55G6 EWR",
		"S-300PS 64H6E sr",
		"SA-11 Buk SR 9S18M1",
		"Dog Ear radar",
		"Hawk tr",
		"Hawk sr",
		"Patriot str",
		"Hawk cwar",
		"p-19 s-125 sr",
		"Roland Radar",
		"snr s-125 tr",
		"house1arm",
		"house2arm",
		"outpost_road",
		"outpost",
		"houseA_arm",
		"TACAN_beacon",
		"Challenger2",
		"Leclerc",
		"M-60",
		"M1128 Stryker MGS",
		"M-1 Abrams",
		"T-55",
		"T-72B",
		"T-80UD",
		"T-90",
		"Leopard1A3",
		"Merkava_Mk4",
		"Ural-4320 APA-5D",
		"ATMZ-5",
		"ATZ-10",
		"GAZ-3307",
		"GAZ-3308",
		"GAZ-66",
		"M978 HEMTT Tanker",
		"HEMTT TFFT",
		"IKARUS Bus",
		"KAMAZ Truck",
		"LAZ Bus",
		"LiAZ Bus",
		"Hummer",
		"M 818",
		"MAZ-6303",
		"Predator GCS",
		"Predator TrojanSpirit",
		"Suidae",
		"Tigr_233036",
		"Trolley bus",
		"UAZ-469",
		"Ural ATsP-6",
		"Ural-4320-31",
		"Ural-4320T",
		"Ural-375 PBU",
		"Ural-375",
		"VAZ Car",
		"ZiL-131 APA-80",
		"SKP-11",
		"ZIL-131 KUNG",
		"ZIL-4331",
		"KrAZ6322",
		"JTAC",
		"Infantry Animated",
		"Electric locomotive",
		"Locomotive",
		"Coach cargo",
		"Coach cargo open",
		"Coach a tank blue",
		"Coach a tank yellow",
		"Coach a passenger",
		"Coach a platform",
		"tacr2a",
		"LARC-V",
		"KS-19",
		"SON_9",
		"Scud_B",
		"HL_DSHK",
		"HL_KORD",
		"tt_DSHK",
		"tt_KORD",
		"HL_ZU-23",
		"tt_ZU-23",
		"HL_B8M1",
		"tt_B8M1",
		"NASAMS_Radar_MPQ64F1",
		"NASAMS_Command_Post",
		"NASAMS_LN_B",
		"NASAMS_LN_C",
		"M4_Sherman",
		"M2A1_halftrack",
		"FPS-117 Dome",
		"FPS-117 ECS",
		"FPS-117",
		"BTR-80",
		"RD_75",
		"S_75M_Volhov",
		"SNR_75V",
		"RLS_19J6",
		"RPC_5N62V",
		"S-200_Launcher",
		"ZSU_57_2",
		"S-60_Type59_Artillery",
		"generator_5i57",
		"T-72B3",
		"PT_76",
		"BTR-82A",
		"ATZ-5",
		"AA8",
		"TZ-22_KrAZ",
		"ATZ-60_Maz",
		"ZIL-135",
		"S_75_ZIL",
		"rapier_fsa_launcher",
		"rapier_fsa_optical_tracker_unit",
		"rapier_fsa_blindfire_radar",
		"bofors40",
		"Chieftain_mk3",
		"Bedford_MWD",
		"Land_Rover_101_FC",
		"Land_Rover_109_S3",
		"hy_launcher",
		"Silkworm_SR",
		"ES44AH",
		"Boxcartrinity",
		"Tankcartrinity",
		"Wellcarnsc",
		"flak18",
		"Pz_IV_H",
		"Leopard-2A5",
		"Leopard-2",
		"leopard-2A4",
		"leopard-2A4_trs",
		"Sd_Kfz_251",
		"Blitz_36-6700A",
		"T155_Firtina",
		"VAB_Mephisto",
		"ZTZ96B",
		"ZBD04A",
		"HQ-7_LN_SP",
		"HQ-7_LN_EO",
		"HQ-7_STR_SP",
		"PLZ05",
		"TYPE-59",
	]);
	export const faction = z.object({
		aircraftTypes: z.record(z.array(aircraftType)),
		countryName: z.string(),
		name: z.string(),
		year: z.number().optional(),
		playable: z.boolean(),
		templateName: z.string(),
		carrierName: z.string().optional(),
		created: z.coerce.date().optional(),
	});
	export const weaponBase = z.object({
		name: z.string(),
		displayName: z.string(),
		year: z.number().optional(),
	});
	export const A2AWeaponType = z.enum(["infrared", "active radar", "semi-active radar"]);
	export const A2GWeaponType = z.enum([
		"Bomb",
		"Cluster",
		"Rocket",
		"Laser Guided Bomb",
		"GPS Guided Bomb",
		"TV Guided Bomb",
		"Laser Guided Rocket",
	]);
	export const A2GRangeWeaponType = z.enum(["Missile", "Glide Bomb", "Laser Guided Missile", "Cruise Missile"]);
	export const RangeType = z.enum(["short", "medium", "long"]);
	export const A2GWeaponTarget = z.enum([
		"Anti-Armor",
		"Hard Target",
		"Medium Target",
		"Soft Target",
		"Ship",
		"Radar",
		"Light Structure",
		"Medium Structure",
		"Hard Structure",
	]);
	export const a2AWeapon = z
		.object({
			type: A2AWeaponType,
			range: z.number(),
			rangeType: RangeType,
		})
		.merge(weaponBase);

	export const a2GWeapon = z
		.object({
			type: A2GWeaponType,
			target: A2GWeaponTarget,
			weight: z.number().optional(),
			highDrag: z.boolean().optional(),
		})
		.merge(weaponBase);

	export const a2GRangeWeapon = z
		.object({
			type: A2GRangeWeaponType,
			targets: z.array(A2GWeaponTarget),
			range: z.number(),
		})
		.merge(weaponBase);

	export const weapon = z.union([a2AWeapon, a2GWeapon, a2GRangeWeapon]);
	export const pylonType = z.enum(["Fuel Tank", "Targeting Pod", "Gun Pod", "ECM Pod", "Other", "Weapon"]);
	export const pylon = z.object({
		CLSID: z.string(),
		num: z.number(),
		total: z.number(),
		count: z.number(),
		type: pylonType,
		weapon: weapon.optional(),
	});

	export const loadout = z.object({
		task: z.union([task, z.literal("default")]),
		name: z.string(),
		displayName: z.string(),
		pylons: z.array(pylon),
	});
	export const campaignGroundGroupType = z.enum(["armor", "mbt", "infantry", "ew", "sam"]);
	export const campaignGroundUnitType = z.union([campaignGroundGroupType, z.literal("shorad")]);
	export const staticType = z.enum([
		"Garage B",
		"Tech hangar A",
		"Electric power box",
		"Repair workshop",
		"FARP Tent",
		"FARP CP Blindage",
		"FARP Fuel Depot",
		"FARP Ammo Dump Coating",
		"Invisible FARP",
		"Chemical tank A",
		"Hangar B",
		"Workshop A",
		"Subsidiary structure 2",
		"Boiler-house A",
		"Military staff",
		"Small werehouse 2",
		"TV tower",
		"Railway station",
		"FARP_SINGLE_01",
		"outpost",
		"FARP",
	]);
	export const samType = z.enum(["SA-10-300", "SA-6", "SA-5", "SA-3", "SA-2", "Hawk"]);
}
export type GroundUnitType = z.infer<typeof Schema.groundUnitType>; // TODO

// queryName
export const queryNameSchema = z.enum([
	"airdromes",
	"packages",
	"flightGroups",
	"groundGroups",
	"aircrafts",
	"groundUnits",
	"structures",
	"unitCamps",
	"SAMs",
	"mapEntities",
	"objectives",
	"buildings",
]);
export type QueryName = z.TypeOf<typeof queryNameSchema>;

// queryKey
export const queryKeySchema = z.custom<QueryName | `${QueryName}-${string}`>((val) => {
	if (typeof val !== "string") {
		return false;
	}
	const [name] = val.split("-", 2);
	return queryNameSchema.safeParse(name).success;
});
export type QueryKey = z.TypeOf<typeof queryKeySchema>;

// entityType
export const entityTypeSchema = z.enum([
	"AirAssaultFlightGroup",
	"Aircraft",
	"Airdrome",
	"CapFlightGroup",
	"CasFlightGroup",
	"DeadFlightGroup",
	"SeadFlightGroup",
	"EscortFlightGroup",
	"GenericStructure",
	"GroundGroup",
	"GroundUnit",
	"Objective",
	"Package",
	"SAM",
	"StrikeFlightGroup",
	"Structure",
	"UnitCamp",
	"Building",
	"Flightplan",
]);
export type EntityType = z.TypeOf<typeof entityTypeSchema>;

const entitySchema = z.object({
	serialized: z.literal(true),
	entityType: entityTypeSchema,
	id: z.string(),
	coalition: Schema.coalition,
	queries: z.array(queryKeySchema),
});
export type EntitySerialized = z.TypeOf<typeof entitySchema>;

const mapEntitySchema = entitySchema.extend({
	name: z.string(),
	position: Schema.position,
	hidden: z.boolean(),
});
export type MapEntitySerialized = z.TypeOf<typeof mapEntitySchema>;

const groupSchema = mapEntitySchema.extend({
	position: Schema.position,
});
export type GroupSerialized = z.TypeOf<typeof groupSchema>;

const groundGroupSchema = groupSchema.extend({
	entityType: z.literal("GroundGroup"),
	startId: z.string(),
	targetId: z.string(),
	type: Schema.campaignGroundGroupType,
	unitIds: z.array(z.string()),
	shoradUnitIds: z.array(z.string()),
	embarkedOntoFlightGroupId: z.string().optional(),
});
export type GroundGroupSerialized = z.TypeOf<typeof groundGroupSchema>;

const samSchema = groupSchema.extend({
	entityType: z.literal("SAM"),
	type: Schema.samType,
	objectiveId: z.string(),
	unitIds: z.array(z.string()),
	active: z.boolean(), // ui
});
export type SAMSerialized = z.TypeOf<typeof samSchema>;

const waypointTypeSchema = z.enum(["TakeOff", "Landing", "Task", "Nav", "Hold"]);
export type WaypointType = z.TypeOf<typeof waypointTypeSchema>;

const waypointTemplateSchema = z.object({
	name: z.string(),
	position: Schema.position,
	onGround: z.boolean(),
	duration: z.number().optional(),
	type: waypointTypeSchema,
	raceTrack: z
		.object({
			name: z.string(),
			position: Schema.position,
		})
		.optional(),
});
export type WaypointTemplateSerialized = z.TypeOf<typeof waypointTemplateSchema>;

const waypointSchema = waypointTemplateSchema.extend({
	flightplanId: z.string(),
	arrivalDuration: z.number(),
});
export type WaypointSerialized = z.TypeOf<typeof waypointSchema>;

const flightplanSchema = entitySchema.extend({
	entityType: z.literal("Flightplan"),
	flightGroupId: z.string(),
	waypoints: z.array(waypointSchema),
});
export type FlightplanSerialized = z.TypeOf<typeof flightplanSchema>;

const flightGroupState = z.enum(["waiting", "start up", "in air", "landed", "destroyed"]);
export type FlightGroupState = z.TypeOf<typeof flightGroupState>;

const flightGroupSchema = groupSchema.extend({
	aircraftIds: z.array(z.string()),
	task: Schema.task,
	startTime: z.number(), // ui
	name: z.string(),
	homeBaseId: z.string(),
	combat: z
		.object({
			type: z.enum(["a2a"]),
			targetId: z.string(),
			cooldownTime: z.number(),
		})
		.optional(),
	packageId: z.string(),
	flightplanId: z.string(),
	state: flightGroupState, // ui
});
export type FlightGroupSerialized = z.TypeOf<typeof flightGroupSchema>;

const escortedFlightGroupSchema = flightGroupSchema.extend({
	escortFlightGroupId: z.record(Schema.task, z.string()).optional(),
});
export type EscortedFlightGroupSerialized = z.TypeOf<typeof escortedFlightGroupSchema>;

const escortingFlightGroupSchema = flightGroupSchema.extend({
	targetFlightGroupId: z.string(),
});
export type EscortingFlightGroupSerialized = z.TypeOf<typeof escortingFlightGroupSchema>;

const airAssaultFlightGroupSchema = flightGroupSchema.extend({
	entityType: z.literal("AirAssaultFlightGroup"),
	targetGroundGroupId: z.string(),
	embarkedGroundGroupId: z.string().optional(),
});
export type AirAssaultFlightGroupSerialized = z.TypeOf<typeof airAssaultFlightGroupSchema>;

const capFlightGroupSchema = flightGroupSchema.extend({
	entityType: z.literal("CapFlightGroup"),
	targetHomeBaseId: z.string(),
});
export type CapFlightGroupSerialized = z.TypeOf<typeof capFlightGroupSchema>;

const casFlightGroupSchema = escortedFlightGroupSchema.extend({
	entityType: z.literal("CasFlightGroup"),
	targetGroundGroupId: z.string(),
});
export type CasFlightGroupSerialized = z.TypeOf<typeof casFlightGroupSchema>;

const deadFlightGroupSchema = escortedFlightGroupSchema.extend({
	entityType: z.literal("DeadFlightGroup"),
	targetSAMId: z.string(),
});
export type DeadFlightGroupSerialized = z.TypeOf<typeof deadFlightGroupSchema>;

const seadFlightGroupSchema = escortingFlightGroupSchema.extend({
	entityType: z.literal("SeadFlightGroup"),
});
export type SeadFlightGroupSerialized = z.TypeOf<typeof seadFlightGroupSchema>;

const escortFlightGroupSchema = escortingFlightGroupSchema.extend({
	entityType: z.literal("EscortFlightGroup"),
});
export type EscortFlightGroupSerialized = z.TypeOf<typeof escortFlightGroupSchema>;

const strikeFlightGroupSchema = escortedFlightGroupSchema.extend({
	entityType: z.literal("StrikeFlightGroup"),
	targetStructureId: z.string(),
});
export type StrikeFlightGroupSerialized = z.TypeOf<typeof strikeFlightGroupSchema>;

const unitSchema = entitySchema.extend({
	alive: z.boolean(),
});
export type UnitSerialized = z.TypeOf<typeof unitSchema>;

const buildingSchema = unitSchema.extend({
	entityType: z.literal("Building"),
	name: z.string(),
	staticType: Schema.staticType,
	offset: Schema.position,
	repairScore: z.number().optional(),
	repairCost: z.number(), // ui
});
export type BuildingSerialized = z.TypeOf<typeof buildingSchema>;

const callSignSchema = z.object({
	"1": z.number(),
	"2": z.number(),
	"3": z.number(),
	name: z.string(),
});
export type CallSign = z.TypeOf<typeof callSignSchema>;

const aircraftSchema = unitSchema.extend({
	entityType: z.literal("Aircraft"),
	aircraftType: Schema.aircraftType,
	flightGroupId: z.string().optional(),
	callSign: callSignSchema.optional(),
	name: z.string().optional(),
	homeBaseId: z.string(),
	isClient: z.boolean(),
	loadout: Schema.loadout.optional(),
});
export type AircraftSerialized = z.TypeOf<typeof aircraftSchema>;

const groundUnitSchema = unitSchema.extend({
	name: z.string(),
	entityType: z.literal("GroundUnit"),
	category: Schema.campaignGroundUnitType,
	type: Schema.groundUnitType,
});

export type GroundUnitSerialized = z.TypeOf<typeof groundUnitSchema>;

const structureSchema = mapEntitySchema.extend({
	name: z.string(),
	structureType: Schema.structureType,
	objectiveId: z.string(),
	buildingIds: z.array(z.string()),
	active: z.boolean(),
});
export type StructureSerialized = z.TypeOf<typeof structureSchema>;

const genericStructureSchema = structureSchema.extend({
	entityType: z.literal("GenericStructure"),
});
export type GenericStructureSerialized = z.TypeOf<typeof genericStructureSchema>;

const unitCampSchema = structureSchema.extend({
	entityType: z.literal("UnitCamp"),
	deploymentScore: z.number(),
	deploymentCost: z.number(), // ui
	hasPower: z.boolean(), // ui
	hasFuel: z.boolean(), // ui
	hasAmmo: z.boolean(), // ui
});
export type UnitCampSerialized = z.TypeOf<typeof unitCampSchema>;

const packageSchema = entitySchema.extend({
	entityType: z.literal("Package"),
	task: Schema.task,
	cruiseSpeed: z.number(),
	startTime: z.number(),
	flightGroupIds: z.array(z.string()),
});
export type PackageSerialized = z.TypeOf<typeof packageSchema>;

const objectiveSchema = entitySchema.extend({
	entityType: z.literal("Objective"),
	name: z.string(),
	position: Schema.position,
	incomingGroundGroupId: z.string().optional(),
});
export type ObjectiveSerialized = z.TypeOf<typeof objectiveSchema>;

const homeBaseSchema = mapEntitySchema.extend({
	name: z.string(),
	type: z.enum(["airdrome", "carrier", "farp"]),
	aircraftIds: z.array(z.string()),
});
export type HomeBaseSerialized = z.TypeOf<typeof homeBaseSchema>;

const airdromeSchema = homeBaseSchema.extend({
	entityType: z.literal("Airdrome"),
	frequencyList: z.array(z.number()),
});
export type AirdromeSerialized = z.TypeOf<typeof airdromeSchema>;

export const stateEntitySchema = z.discriminatedUnion("entityType", [
	genericStructureSchema,
	unitCampSchema,
	buildingSchema,
	packageSchema,
	objectiveSchema,
	aircraftSchema,
	airAssaultFlightGroupSchema,
	deadFlightGroupSchema,
	escortFlightGroupSchema,
	strikeFlightGroupSchema,
	casFlightGroupSchema,
	capFlightGroupSchema,
	seadFlightGroupSchema,
	airdromeSchema,
	groundGroupSchema,
	groundUnitSchema,
	flightplanSchema,
	samSchema,
]);
export type StateEntitySerialized = z.TypeOf<typeof stateEntitySchema>;

export const stateSchema = z.object({
	id: z.string(),
	version: z.number(),
	active: z.boolean(),
	time: z.number(),
	map: z.string(),
	name: z.string(),
	factionDefinitions: z.record(Schema.coalition, Schema.faction.optional()),
	entities: z.array(stateEntitySchema),
});
export type StateSerialized = z.TypeOf<typeof stateSchema>;
