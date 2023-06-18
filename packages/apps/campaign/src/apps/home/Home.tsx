import { useCreateErrorToast, useCreateToast } from "@kilcekru/dcc-lib-components";
import { createEffect, createMemo, ErrorBoundary, onCleanup, onMount, useContext } from "solid-js";

import { CampaignContext, Map } from "../../components";
import { DataContext } from "../../components/DataProvider";
import { useSave } from "../../hooks";
import { getClientMissionStartTime } from "../../utils";
import { Header, NextDayModal, OverlaySidebar, OverlaySidebarProvider, ResetModal, Sidebar } from "./components";
import styles from "./Home.module.less";

export const Home = () => {
	const [
		state,
		{ tick, saveCampaignRound, pause, updateDeploymentScore, updateRepairScore, togglePause, clearToastMessages },
	] = useContext(CampaignContext);
	const dataStore = useContext(DataContext);
	let inter: number;
	let longInter: number;
	let tickFinished = true;
	const intervalTimeout = createMemo(() => 1000 / (state.multiplier === 1 ? 1 : state.multiplier / 10));
	const save = useSave();
	const createToast = useCreateToast();
	const createErrorToast = useCreateErrorToast();

	const interval = () => {
		if (tickFinished === true) {
			tickFinished = false;
			const tickValue = state.multiplier === 1 ? 1 : 10;
			const clientMissionStartTime = getClientMissionStartTime(state);

			if (clientMissionStartTime == null || state.timer < clientMissionStartTime) {
				tick?.(tickValue);

				try {
					saveCampaignRound?.(dataStore);
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error(e, state);
					stopInterval();
				}
			} else {
				pause?.();
			}
			tickFinished = true;
		} else {
			// eslint-disable-next-line no-console
			console.warn("tick skipped");
		}
	};

	const longInterval = () => {
		updateDeploymentScore?.();
		updateRepairScore?.();
		save();
	};

	const startInterval = () => {
		stopInterval();
		inter = window.setInterval(interval, intervalTimeout());
		longInter = window.setInterval(longInterval, 1000);
	};
	const stopInterval = () => {
		window.clearInterval(inter);
		window.clearInterval(longInter);
	};

	createEffect(() => {
		if (state.paused) {
			stopInterval();
		} else if (state.active) {
			startInterval();
		}
	});

	createEffect(() => {
		const ids: Array<string> = [];
		state.toastMessages.forEach((msg) => {
			switch (msg.type) {
				case "error": {
					createErrorToast({
						description: msg.description,
						title: msg.title,
					});
					break;
				}
				default: {
					createToast({
						description: msg.description,
						title: msg.title,
					});
				}
			}
			ids.push(msg.id);
		});

		if (ids.length > 0) {
			clearToastMessages?.(ids);
		}
	});
	onCleanup(() => {
		stopInterval();
	});

	const onKeyUp = (e: KeyboardEvent) => {
		if (e.code === "Space") {
			togglePause?.();
		}
	};

	onMount(() => document.addEventListener("keyup", onKeyUp));

	onCleanup(() => document.removeEventListener("keyup", onKeyUp));

	return (
		<OverlaySidebarProvider>
			<div class={styles.home}>
				<Header />
				<Sidebar />
				<OverlaySidebar />
				<div class={styles.content}>
					<ErrorBoundary fallback={<div>Something went terribly wrong</div>}>
						<Map />
					</ErrorBoundary>
				</div>
				<ResetModal />
				<NextDayModal />
			</div>
		</OverlaySidebarProvider>
	);
};
