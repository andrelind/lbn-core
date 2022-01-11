import { v4 as uuid } from 'uuid';
import { bumpPatch } from '../helpers/versioning';
import { Game, Squadron, Tournament } from '../types';
import {
  Action,
  ADD_GAME,
  ADD_SYNCED_TOURNAMENT,
  ADD_TOURNAMENT,
  CLEAR_SQUADRON,
  EDIT_GAME,
  REMOVE_GAME,
  REMOVE_SYNCED_TOURNAMENT,
  REMOVE_TOURNAMENT,
  SELECT_SQUADRON,
  SET_NUMBER_OF_PLAYERS,
  SET_PLACEMENT,
  TOURNAMENT_CHANGE_DATE,
  TOURNAMENT_CHANGE_FORMAT,
  TOURNAMENT_CHANGE_NAME,
} from '../actions/tournaments';
import { IMPORT_ALL } from '../actions/sync';

export type TournamentState = { list: Tournament[]; selected?: Squadron };

const initialState = { list: [] };

export default function onAction(
  state: TournamentState = initialState,
  action: Action
): TournamentState {
  if (!action.type) {
    return state;
  }

  switch (action.type) {
    case ADD_TOURNAMENT: {
      const { name, format, squadron, date } = action;

      const tournament = {
        uid: uuid(),
        name,
        format,
        squadron,
        date,
        games: [],
        version: '1.0.0',
      };

      return { ...state, list: [...state.list, tournament] };
    }

    case REMOVE_TOURNAMENT: {
      const { uid } = action;
      return { ...state, list: state.list.filter((l) => l.uid !== uid) };
    }

    case ADD_SYNCED_TOURNAMENT: {
      const { tournament } = action;

      // Replace current object?
      if (state.list.filter((s) => s.uid === tournament.uid).length > 0) {
        return {
          ...state,
          list: state.list.map((l) => {
            if (l.uid !== tournament.uid) {
              return l;
            }

            return { ...tournament };
          }),
        };
      }

      // Just add it to the end
      return { ...state, list: [...state.list, tournament] };
    }

    case REMOVE_SYNCED_TOURNAMENT: {
      const { uid } = action;
      return { ...state, list: state.list.filter((l) => l.uid !== uid) };
    }

    case SELECT_SQUADRON: {
      return {
        ...state,
        selected: action.squadron,
      };
    }

    case CLEAR_SQUADRON: {
      return { ...state, selected: undefined };
    }

    case SET_PLACEMENT: {
      const { tournamentUid, placement } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.placement = placement;
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }

    case SET_NUMBER_OF_PLAYERS: {
      const { tournamentUid, numberOfPlayers } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.numberOfPlayers = numberOfPlayers;
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }

    case ADD_GAME: {
      const { tournamentUid, uid } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const game: Game = {
            uid,
            type: 'Swiss',
            score: undefined,
            bye: false,
            win: undefined,
            round: l.games.filter((g) => g.type === 'Swiss').length + 1,
            notes: undefined,
            opponent: {
              name: undefined,
              score: undefined,
              squadron: undefined,
            },
          };

          const edit = { ...l };
          edit.games = [...edit.games, game];
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }

    case EDIT_GAME: {
      const { tournamentUid, game } = action;
      const { uid, type, round, score, opponent, bye, win, notes } = game;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.games = edit.games.map((g) => {
            if (g.uid !== uid) {
              return g;
            }

            const editGame = { ...g };

            editGame.type = type;
            editGame.round = round;
            editGame.score = score;
            editGame.bye = bye;
            editGame.win = win;
            editGame.notes = notes;
            editGame.opponent.name = opponent.name;
            editGame.opponent.score = opponent.score;
            editGame.opponent.squadron = opponent.squadron;
            return editGame;
          });
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }

    case REMOVE_GAME: {
      const { tournamentUid, gameUid } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.games = edit.games.filter((g) => g.uid !== gameUid);
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }
    case TOURNAMENT_CHANGE_NAME: {
      const { tournamentUid, name } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.name = name;
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }
    case TOURNAMENT_CHANGE_DATE: {
      const { tournamentUid, date } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.date = date;
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }
    case TOURNAMENT_CHANGE_FORMAT: {
      const { tournamentUid, format } = action;

      return {
        ...state,
        list: state.list.map((l) => {
          if (l.uid !== tournamentUid) {
            return l;
          }

          const edit = { ...l };
          edit.format = format;
          edit.version = bumpPatch(edit.version || '1.0.0');
          return edit;
        }),
      };
    }

    case IMPORT_ALL: {
      const { tournaments } = action.payload;
      return { ...state, list: [...tournaments] };
    }

    default:
      break;
  }

  return state;
}
