import { SquadronXWS } from "../types";

export const SYNC_SQUADS = "SYNC_SQUADS";
export const IMPORT_ALL = "IMPORT_ALL";

export type SyncSquadsAction = {
  type: "SYNC_SQUADS";
};

export type ImportAllAction = {
  type: typeof IMPORT_ALL;
  payload: { squadrons: SquadronXWS[] };
};

export type Action = ImportAllAction | SyncSquadsAction;

export const syncSquads = () => ({
  type: SYNC_SQUADS,
});

export const importAllSync = (payload: {
  squadrons: SquadronXWS[];
}): ImportAllAction => ({
  type: IMPORT_ALL,
  payload,
});

export default {
  syncSquads,
  importAllSync,
};
