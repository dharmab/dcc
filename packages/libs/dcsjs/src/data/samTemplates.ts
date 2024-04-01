import { SamType } from "./enums";
import { SamTemplate } from "./types";

export const samTemplates: Record<SamType, SamTemplate> = {
	"SA-2": {
		units: [
			"SNR_75V",
			"S_75M_Volhov",
			"S_75M_Volhov",
			"S_75M_Volhov",
			"S_75M_Volhov",
			"S_75M_Volhov",
			"S_75M_Volhov",
			"ZIL-131 KUNG",
			"ZIL-131 KUNG",
			"p-19 s-125 sr",
		],
		fireInterval: 60,
		range: 45_000,
	},
	"SA-3": {
		units: [
			"snr s-125 tr",
			"5p73 s-125 ln",
			"5p73 s-125 ln",
			"5p73 s-125 ln",
			"5p73 s-125 ln",
			"p-19 s-125 sr",
			"ZIL-131 KUNG",
			"ZiL-131 APA-80",
			"GAZ-66",
			"GAZ-66",
			"GAZ-66",
			"ZiL-131 APA-80",
		],
		fireInterval: 60,
		range: 25_000,
	},
	"SA-5": {
		units: [
			"RPC_5N62V",
			"RLS_19J6",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"S-200_Launcher",
			"ZiL-131 APA-80",
			"GAZ-66",
		],
		fireInterval: 60,
		range: 35_500,
	},
	"SA-6": {
		units: [
			"Kub 1S91 str",
			"Kub 2P25 ln",
			"Kub 2P25 ln",
			"Kub 2P25 ln",
			"Kub 2P25 ln",
			"ATZ-10",
			"ATZ-10",
			"ZiL-131 APA-80",
			"Ural-4320-31",
			"Ural-4320-31",
			"Ural-375 PBU",
		],
		fireInterval: 60,
		range: 35_500,
	},
	"SA-10-300": {
		units: [
			"S-300PS 40B6M tr",
			"S-300PS 40B6MD sr",
			"S-300PS 54K6 cp",
			"S-300PS 64H6E sr",
			"S-300PS 5P85C ln",
			"S-300PS 5P85D ln",
			"S-300PS 5P85D ln",
			"S-300PS 5P85C ln",
			"S-300PS 5P85D ln",
			"S-300PS 5P85D ln",
			"generator_5i57",
			"generator_5i57",
			"ATZ-5",
			"ATZ-5",
			"GAZ-66",
			"ATZ-60_Maz",
			"ATZ-60_Maz",
			"KAMAZ Truck",
		],
		fireInterval: 60,
		range: 74_000,
	},
	Hawk: {
		units: [
			"Hawk pcp",
			"Hawk sr",
			"Hawk cwar",
			"Hawk tr",
			"Hawk ln",
			"Hawk ln",
			"Hawk ln",
			"Hawk tr",
			"Hawk ln",
			"Hawk ln",
			"Hawk ln",
		],
		fireInterval: 60,
		range: 47_400,
	},
};
