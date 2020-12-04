import * as Squadrons from "./squadrons";
import * as Tutorial from "./tutorial";
import * as Notifications from "./notifications";
import * as Blueprints from "./blueprints";
import * as User from "./user";
import * as Filter from "./filter";
import * as Misc from "./misc";
import * as Tournament from "./tournaments";
import * as Sync from "./sync";

export const squadrons = Squadrons;
export const tutorial = Tutorial;
export const notifications = Notifications;
export const blueprints = Blueprints;
export const user = User;
export const filter = Filter;
export const misc = Misc;
export const tournament = Tournament;
export const sync = Sync;

export type Action =
  | Squadrons.Action
  | Tutorial.Action
  | Notifications.Action
  | Blueprints.Action
  | User.Action
  | Filter.Action
  | Misc.Action
  | Tournament.Action
  | Sync.Action;
