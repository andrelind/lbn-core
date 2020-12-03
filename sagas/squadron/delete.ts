import { select, call, put, takeEvery } from "redux-saga/effects";

import {
  REMOVE_SQUADRON,
  REMOVE_LOADED_SQUADRON,
  RemoveSquadronAction,
} from "../../actions/squadrons";
import { deleteSquadron } from "../../requests/squadron";
import { AppState } from "../../state";
import { UserState } from "../../reducers/user";

const getUser = (state: AppState) => state.app.user || {};

function* deleteSquad(action: RemoveSquadronAction) {
  try {
    console.log("DELETE SQUADRON", action);

    const uid = action.squadronUid;
    if (!uid) {
      console.log("DELETE SQUADRON: NO UID");
      return;
    }

    yield put({ type: REMOVE_LOADED_SQUADRON, squadronUid: uid });

    const user: UserState = yield select(getUser);
    if (!user.name) {
      return;
    }

    const result = yield call(deleteSquadron, uid, user);
    if (
      result &&
      result.data &&
      result.data.remove &&
      result.data.remove.success === true
    ) {
      // Success
      console.log("DELETE SQUADRON: SUCCESS");
    } else {
      console.log("DELETE SQUADRON: FAILED", result);
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([REMOVE_SQUADRON], deleteSquad);
}

export default saga;
