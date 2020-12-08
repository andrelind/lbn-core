import setSquadron from "./squadron/set";
import deleteSquadron from "./squadron/delete";
import setBlueprint from "./blueprint/set";
import deleteBlueprint from "./blueprint/delete";
import setTournament from "./tournaments/set";
import deleteTournament from "./tournaments/delete";
// import sync from './sync';
import collection from "./collection";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(setSquadron);
  yield fork(deleteSquadron);
  yield fork(setBlueprint);
  yield fork(deleteBlueprint);
  yield fork(setTournament);
  yield fork(deleteTournament);
  yield fork(collection);
  // yield fork(sync)
}

// export default [
//   setSquadron,
//   deleteSquadron,
//   setBlueprint,
//   deleteBlueprint,
//   setTournament,
//   deleteTournament,
//   // sync,
//   collection,
// ];
