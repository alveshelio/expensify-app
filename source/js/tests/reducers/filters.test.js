/* eslint no-undef: "off" */
import moment from 'moment';

import { SET_END_DATE, SORT_BY_AMOUNT, SORT_BY_DATE, SET_TEXT_FILTER, SET_START_DATE } from '../../types/filtersTypes';
import filtersReducer from '../../reducers/filtersReducer';

test('it should setup default filter values', () => {
  const state = filtersReducer(undefined, {});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('it should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
  /* expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  }); */

  expect(state.sortBy).toBe('amount');
});

test('it should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: SORT_BY_DATE });
  /* expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  }); */

  expect(state.sortBy).toBe('date');
});

test('it should set text filter value', () => {
  const state = filtersReducer(undefined, { type: SET_TEXT_FILTER, text: 'rent' });
  /* expect(state).toEqual({
    text: 'rent',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  }); */

  expect(state.text).toBe('rent');
});

test('it should set endDate value', () => {
  const state = filtersReducer(undefined, { type: SET_END_DATE, date: moment().format('MMM Do, YYYY') });

  /* expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().format('MMM Do, YYYY'),
  }); */

  expect(state.endDate).toBe(moment().format('MMM Do, YYYY'));
});

test('it should set startDate value', () => {
  // const startDate = moment().subtract(5, 'd');
  const state = filtersReducer(undefined, { type: SET_START_DATE, date: moment().format('MMM Do, YYYY') });
  /* expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().format('MMM Do, YYYY'),
    endDate: moment().endOf('month'),
  }); */

  expect(state.startDate).toBe(moment().format('MMM Do, YYYY'));
});
