import * as Components from "@kilcekru/dcc-lib-components";
import * as Types from "@kilcekru/dcc-shared-types";
import * as Utils from "@kilcekru/dcc-shared-utils";
import { cnb } from "cnbuilder";
import { createMemo, onCleanup, onMount, Show, useContext } from "solid-js";

import { CampaignContext } from "../../../../components";
import { Airdrome } from "./Airdrome";
import { FlightGroup } from "./FlightGroup";
import { GroundGroup } from "./GroundGroup";
import style from "./OverlaySidebar.module.less";
import { Sam } from "./Sam";
import { Structure } from "./Structure";

export function OverlaySidebar() {
	const [state, { clearSelectedEntity }] = useContext(CampaignContext);
	const isOpen = createMemo(() => state.selectedEntityId != null);
	const getEntity = createMemo(() => Utils.ECS.EntitySelector(state.entities));
	const entity = createMemo(() => {
		if (state.selectedEntityId == null) {
			return undefined;
		}

		return getEntity()(state.selectedEntityId);
	});

	function onClose() {
		clearSelectedEntity?.();
	}

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === "Escape" && isOpen()) {
			onClose();
		}
	};

	onMount(() => document.addEventListener("keydown", onKeydown));

	onCleanup(() => document.removeEventListener("keydown", onKeydown));

	return (
		<div class={cnb(style["overlay-sidebar"], isOpen() ? style["overlay-sidebar--open"] : null)}>
			<Show when={entity()?.entityType === "GenericStructure"}>
				<Structure structure={entity() as Types.Serialization.GenericStructureSerialized} />
			</Show>
			<Show when={entity()?.entityType === "UnitCamp"}>
				<Structure structure={entity() as Types.Serialization.UnitCampSerialized} />
			</Show>
			<Show when={entity()?.entityType.includes("FlightGroup")}>
				<FlightGroup flightGroup={entity() as Types.Serialization.FlightGroupSerialized} />
			</Show>
			<Show when={entity()?.entityType === "GroundGroup"}>
				<GroundGroup groundGroup={entity() as Types.Serialization.GroundGroupSerialized} />
			</Show>
			<Show when={entity()?.entityType === "Airdrome" || entity()?.entityType === "Farp"}>
				<Airdrome airdrome={entity() as Types.Serialization.AirdromeSerialized} />
			</Show>
			<Show when={entity()?.entityType === "SAM"}>
				<Sam sam={entity() as Types.Serialization.SAMSerialized} />
			</Show>
			<Components.Button onPress={onClose} class={style["close-button"]} large>
				<Components.Icons.Close />
			</Components.Button>
		</div>
	);
}