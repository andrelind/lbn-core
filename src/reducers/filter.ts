import {
  Action,
  ADD_TAG_FILTER,
  CLEAR_FILTERS,
  FilterType,
  REMOVE_TAG_FILTER,
  SET_FIRST_SORTING,
  SET_SECOND_SORTING,
  SET_SORT_DIRECTION,
  SHOW_FILTER,
  SHOW_SORTING,
  SortDirectionType,
  SortingType,
  TOGGLE_FILTER,
} from '../actions/filter';

export type FilterState = {
  showFilter: boolean;
  showSorting: boolean;
  filters: { [key in FilterType]?: boolean };
  firstSorting: SortingType;
  secondSorting: SortingType;
  direction: SortDirectionType;
  tags: string[];
};

const initialState = {
  showFilter: false,
  showSorting: false,
  filters: {},
  firstSorting: 'Faction' as SortingType,
  secondSorting: 'Alphabetically' as SortingType,
  direction: 'Ascending' as SortDirectionType,
  tags: [],
};

export default function onAction(
  state: FilterState = initialState,
  action: Action
): FilterState {
  switch (action.type) {
    case SHOW_FILTER: {
      return { ...state, showFilter: action.show };
    }
    case SHOW_SORTING: {
      return { ...state, showSorting: action.show };
    }
    case TOGGLE_FILTER: {
      const newState = { ...state };
      if (newState.filters[action.filter]) {
        delete newState.filters[action.filter];
      } else {
        newState.filters[action.filter] = true;
      }

      return newState;
    }
    case CLEAR_FILTERS: {
      return { ...state, filters: {}, tags: [] };
    }
    case SET_FIRST_SORTING: {
      return { ...state, firstSorting: action.sorting };
    }
    case SET_SECOND_SORTING: {
      return { ...state, secondSorting: action.sorting };
    }
    case SET_SORT_DIRECTION: {
      break;
    }
    case ADD_TAG_FILTER: {
      return { ...state, tags: [...state.tags, action.tag] };
    }
    case REMOVE_TAG_FILTER: {
      return { ...state, tags: state.tags.filter((t) => t !== action.tag) };
    }
  }
  return state;
}
