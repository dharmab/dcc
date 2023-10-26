import { JSX, useContext } from "solid-js";

import { RadioContext } from "./RadioGroup";
import Styles from "./RadioItem.module.less";

function useRadioApi() {
	const ctx = useContext(RadioContext);

	if (ctx == null) {
		throw "Radio Context not found";
	}

	return ctx;
}
export function RadioItem(props: { id: string; children?: JSX.Element }) {
	const api = useRadioApi();
	return (
		<label {...api.getItemProps({ value: props.id })} class={Styles.radio}>
			<div {...api.getItemControlProps({ value: props.id })} class={Styles.control} />
			<span {...api.getItemTextProps({ value: props.id })} class={Styles.label}>
				{props.children}
			</span>
			<input {...api.getItemHiddenInputProps({ value: props.id })} />
		</label>
	);
}
