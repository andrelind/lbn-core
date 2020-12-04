import * as Actions from "./actions";
import * as Assets from "./assets";
import * as Colors from "./assets/colors";
import * as Helpers from "./helpers";
import * as Loader from "./loader";
import * as Reducers from "./reducers";
import * as Requests from "./requests";
import * as Sagas from "./sagas";
import * as State from "./state";

export const actions = Actions;
export const assets = Assets;
export const colors = Colors;
export const helpers = Helpers;
export const loader = Loader;
export const reducers = Reducers;
export const requests = Requests;
export const sagas = Sagas;
export const state = State;

export default {
  actions: Actions,
  assets: Assets,
  colors: Colors,
  helpers: Helpers,
  loader: Loader,
  reducers: Reducers,
  requests: Requests,
  sagas: Sagas,
  state: State,
};
