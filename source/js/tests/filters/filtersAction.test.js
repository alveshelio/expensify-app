/* eslint no-undef: 0 */
import moment from 'moment';

import {
  SET_END_DATE,
  SET_START_DATE,
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
} from '../../types/filtersTypes';
import {
  setFilterStartDate,
  setFilterEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from '../../actions/filtersActions';


test('it should set up setFilterStartDate filter', () => {
  const filterStartDate = moment().format('MMM Do, YYYY');
  const action = setFilterEndDate(filterStartDate);
  expect(action).toEqual({
    type: SET_END_DATE,
    date: filterStartDate,
  });
});

test('it should set up setFilterEndDate filter', () => {
  const filterEndDate = moment().format('MMM Do, YYYY');
  const action = setFilterStartDate(filterEndDate);
  expect(action).toEqual({
    type: SET_START_DATE,
    date: filterEndDate,
  });
});

test('it should set up sortByAmout filter', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: SORT_BY_AMOUNT,
  });
});

test('it should set up sortByDate filter', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: SORT_BY_DATE,
  });
});

test('it should set up setTextFilter filter', () => {
  const action = setTextFilter('date');
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    text: 'date',
  });
});
