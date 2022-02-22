// @flow
import { Format } from '../types';
import {
  Action,
  SET_VERSION,
  TOGGLE_DEFAULT_FORMAT,
  TOGGLE_MINIMIZE,
  TOGGLE_SHOW_UNAVAILABLE,
  TOGGLE_STATS,
} from '../actions/misc';

export type MiscState = {
  showUnavailable: boolean;
  version?: string;
  defaultFormat: Format;
  showStats: boolean;
  minimized: { [s: string]: boolean };
};

const initialState = {
  showUnavailable: true,
  defaultFormat: 'Extended' as Format,
  showStats: true,
  minimized: {},
};

export default function onAction(
  state: MiscState = initialState,
  action: Action
): MiscState {
  switch (action.type) {
    case TOGGLE_STATS:
      return { ...state, showStats: !state.showStats };
    case TOGGLE_SHOW_UNAVAILABLE:
      return { ...state, showUnavailable: !state.showUnavailable };
    case TOGGLE_DEFAULT_FORMAT: {
      return {
        ...state,
        defaultFormat:
          state.defaultFormat === 'Standard' ? 'Extended' : 'Standard',
      };
    }
    case SET_VERSION:
      return { ...state, version: action.version };

    case TOGGLE_MINIMIZE: {
      const copy = { ...state };
      if (!copy.minimized) {
        copy.minimized = {};
      }
      copy.minimized[action.key] = !copy.minimized[action.key];

      return copy;
    }
  }
  return state;
}
