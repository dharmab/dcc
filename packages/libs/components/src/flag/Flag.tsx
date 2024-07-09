import { cnb } from "cnbuilder";

import Styles from "./Flag.module.less";

export function Flag(props: { countryName: string; class?: string }) {
	const flagCountry = () => {
		switch (props.countryName) {
			case "Austria":
				return Styles.austria;
			case "France":
				return Styles.france;
			case "Germany":
				return Styles.germany;
			case "Iran":
				return Styles.iran;
			case "Iraq":
				return Styles.iraq;
			case "Israel":
				return Styles.israel;
			case "Russia":
				return Styles.russia;
			case "Spain":
				return Styles.spain;
			case "Syria":
				return Styles.syria;
			case "Sweden":
				return Styles.sweden;
			case "USA":
				return Styles.usa;
			case "Osea":
				return Styles.osea;
			case "Erusea":
				return Styles.erusea;
			case "Yuktobania":
				return Styles.yuktobania;
			case "Belka":
				return Styles.belka;
			case "Ustio":
				return Styles.ustio;
			case "ISAF":
				return Styles.isaf;
			default:
				return Styles.usa;
		}
	};

	return <div class={cnb(flagCountry(), props.class)} />;
}
