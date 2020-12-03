import {
  Action,
  RESET_LOADED_SQUADRONS,
  UPDATE_LOADED_SQUADRON,
  REMOVE_LOADED_SQUADRON,
} from "../actions/squadrons";

import { loadSquadron, pointsForSquadron } from "../helpers/unit";
import { Squadron } from "../types";

export type State = { [s: string]: Squadron };

const initialState = {};

export default function onAction(
  state: State = initialState,
  action: Action
): State {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case RESET_LOADED_SQUADRONS: {
      // Reset state when app starts in order to reload all squadrons
      return {};
    }

    case UPDATE_LOADED_SQUADRON: {
      const { squadronXws } = action;

      const newState = { ...state };
      squadronXws.forEach((s) => {
        try {
          const p = loadSquadron(s);
          if (p) {
            p.cost = pointsForSquadron(s);
            newState[s.uid] = p;
          }
        } catch (error) {
          console.log(error);
        }
      });
      return newState;
    }

    case REMOVE_LOADED_SQUADRON: {
      const { squadronUid } = action;

      const newState = { ...state };
      delete newState[squadronUid];
      return newState;
    }

    default:
      break;
  }
  return state;
}
