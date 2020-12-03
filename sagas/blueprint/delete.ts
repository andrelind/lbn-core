import { select, call, takeEvery } from "redux-saga/effects";

import {
  REMOVE_BLUEPRINT,
  RemoveBlueprintAction,
} from "../../actions/blueprints";
import { UserState } from "../../reducers/user";
import { AppState } from "../../state";
import { deleteBlueprint } from "../../requests/blueprints";

const getUser = (state: AppState) => state.app.user || {};

function* removeBlueprint(action: RemoveBlueprintAction) {
  try {
    const user: UserState = yield select(getUser);
    if (!user.name) {
      return;
    }

    console.log("DELETE BLUEPRINT");

    const { uid } = action;
    if (!uid) {
      console.log("DELETE BLUEPRINT: NO UID");
      return;
    }

    const result = yield call(deleteBlueprint, uid, user);
    if (
      result &&
      result.data &&
      result.data.removeBlueprint &&
      result.data.removeBlueprint.success === true
    ) {
      // Success
      // console.log('SUCCESS', { result });
      console.log("DELETE BLUEPRINT: SUCCESS");
    } else {
      console.log("DELETE BLUEPRINT", { result });
    }
  } catch (e) {
    console.error(e);
  }
}

function* saga(): any {
  yield takeEvery([REMOVE_BLUEPRINT], removeBlueprint);
}

export default saga;
