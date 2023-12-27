import type * as Types from "@kilcekru/dcc-shared-types";

import type * as Entities from "../entities";
import { QueryKey, QueryName, store } from "./store";

export function splitQueryKey(key: QueryKey) {
	return key.split("-", 2) as [QueryName] | [QueryName, string];
}

export function getEntity<Type extends Entities.Entity>(id: Types.Campaign.Id): Type {
	const entity = store.entities.get(id);
	if (entity == undefined) {
		throw new Error(`getEntity: invalid id ${id}`);
	}
	return entity as Type;
}

export function getObjective(name: string) {
	for (const objective of store.queries.objectives) {
		if (objective.name === name) {
			return objective;
		}
	}

	throw new Error(`getObjective: invalid name ${name}`);
}

self.getEntity = getEntity;
