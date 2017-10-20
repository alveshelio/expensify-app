import { SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY_AMOUNT, SORT_BY_DATE} from '../types/filtersTypes';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };
    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' };
    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' };
    case SET_START_DATE:
      return { ...state, startDate: action.date };
    case SET_END_DATE:
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};
