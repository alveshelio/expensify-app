import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE } from '../types/filtersTypes';

export const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
});

export const setFilterStartDate = (date = Date.now()) => ({
  type: SET_START_DATE,
  date,
});

export const setFilterEndDate = (date = Date.now()) => ({
  type: SET_END_DATE,
  date,
});
