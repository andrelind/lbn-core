import { combineReducers } from "redux";
import * as Xws from "./xws";
import * as Squadrons from "./squadrons";
import * as Tutorial from "./tutorial";
import * as Collection from "./collection";
import * as Notifications from "./notifications";
import * as Blueprints from "./blueprints";
import * as Misc from "./misc";
import * as User from "./user";
import * as Filter from "./filter";
import * as Tournaments from "./tournaments";

export const xws = Xws;
export const squadrons = Squadrons;
export const tutorial = Tutorial;
export const collection = Collection;
export const notifications = Notifications;
export const blueprints = Blueprints;
export const misc = Misc;
export const user = User;
export const filter = Filter;
export const tournaments = Tournaments;

const reducers = {
  xws: Xws.default,
  squadrons: Squadrons.default,
  tutorial: Tutorial.default,
  collection: Collection.default,
  notifications: Notifications.default,
  blueprints: Blueprints.default,
  misc: Misc.default,
  user: User.default,
  filter: Filter.default,
  tournaments: Tournaments.default,
};

export default combineReducers(reducers);
