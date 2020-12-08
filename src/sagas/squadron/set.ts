import { call, put, select, takeEvery } from "redux-saga/effects";
import { SquadronXWS } from "../../types";
import { AppState } from "../../state";
import {
  ADD_SHIP,
  ADD_SQUADRON,
  CHANGE_PILOT,
  COPY_SHIP,
  COPY_SQUADRON,
  DECREASE_SQUADRON_LOSSES,
  DECREASE_SQUADRON_WINS,
  IMPORT_SQUADRON,
  INCREASE_SQUADRON_LOSSES,
  INCREASE_SQUADRON_WINS,
  REMOVE_SHIP,
  REMOVE_SQUADRON,
  RENAME_SQUADRON,
  RESET_LOADED_SQUADRONS,
  SET_SQUADRON_TAGS,
  SET_UPGRADE,
  TOGGLE_FAVOURITE_SQUADRON,
  TOGGLE_FORMAT_SQUADRON,
  UPDATE_LOADED_SQUADRON,
} from "../../actions/squadrons";
import { setSquadron } from "../../requests/squadron";
import { UserState } from "../../reducers/user";
import { IMPORT_ALL } from "../../actions/sync";

const getUser = (state: AppState) => state.app.user || {};
const getSquadronXws = (state: AppState) => state.app.xws;
const getSquadrons = (state: AppState) => state.app.squadrons;

function* updateOnLoad(): any {
  console.log("SET SQUADRON: ON LOAD");

  const squadrons: SquadronXWS[] = yield select(getSquadronXws);

  yield put({ type: RESET_LOADED_SQUADRONS });
  yield put({
    type: UPDATE_LOADED_SQUADRON,
    squadronXws: squadrons.filter((s) => s.pilots.length > 0),
  });

  // Purge all XWS-squadrons that we could not load...!
  const loadedSquadrons = yield select(getSquadrons);
  for (let i = 0; i < squadrons.length; i++) {
    const xws = squadrons[i];
    if (!loadedSquadrons[xws.uid]) {
      yield put({ type: REMOVE_SQUADRON, squadronUid: xws.uid });
    }
  }
}

/*
  Only used for updating squads on server via fire-n-forget
*/
function* setSquad(action: any): any {
  try {
    console.log("SET SQUADRON", action);

    const squadrons: SquadronXWS[] = yield select(getSquadronXws);
    const uid =
      action.type === COPY_SQUADRON
        ? squadrons[squadrons.length - 1].uid
        : action.squadron
        ? action.squadron.uid
        : action.squadronUid || squadrons[squadrons.length - 1].uid;

    if (!uid) {
      console.log("SET SQUADRON: UID NOT FOUND", uid);
      return;
    }

    // console.log("SET SQUADRON: SQUADRONS", squadrons);
    const squadron: SquadronXWS | void = squadrons.find((s) => s.uid === uid);
    if (!squadron) {
      console.log("SET SQUADRON: NOT FOUND", uid);
      return;
    }

    // Update internal structure of loaded squadrons
    yield put({ type: UPDATE_LOADED_SQUADRON, squadronXws: [squadron] });

    const user: UserState = yield select(getUser);
    if (!user.name) {
      return;
    }

    const result = yield call(setSquadron, squadron, user);
    if (
      result &&
      result.data &&
      result.data.set &&
      result.data.set.success === true
    ) {
      // Success
      console.log("SET SQUADRON: SUCCESS");
    } else {
      console.log("SET SQUADRON: FAILED", result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery(
    [
      IMPORT_SQUADRON,
      ADD_SQUADRON,
      COPY_SQUADRON,
      RENAME_SQUADRON,
      ADD_SHIP,
      COPY_SHIP,
      REMOVE_SHIP,
      CHANGE_PILOT,
      SET_UPGRADE,
      TOGGLE_FAVOURITE_SQUADRON,
      TOGGLE_FORMAT_SQUADRON,
      INCREASE_SQUADRON_WINS,
      DECREASE_SQUADRON_WINS,
      INCREASE_SQUADRON_LOSSES,
      DECREASE_SQUADRON_LOSSES,
      SET_SQUADRON_TAGS,
    ],
    setSquad
  );
  yield takeEvery(["REDUX_STORAGE_LOAD", IMPORT_ALL], updateOnLoad);
}

export default saga;
