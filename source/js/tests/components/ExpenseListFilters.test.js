/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/expenses/filters/ExpenseListFilters';

// let onChange;
let setFilterStartDateSpy;
let setFilterEndDateSpy;
let setTextFilterSpy;
let sortByAmountSpy;
let sortByDateSpy;
let wrapper;

const filters = {
  text: 'rent',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: 'rent',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
};

beforeEach(() => {
  // onChange = jest.fn();
  setFilterStartDateSpy = jest.fn();
  setFilterEndDateSpy = jest.fn();
  setTextFilterSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  sortByDateSpy = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    setFilterStartDate={setFilterStartDateSpy}
    setFilterEndDate={setFilterEndDateSpy}
    setTextFilter={setTextFilterSpy}
    sortByAmount={sortByAmountSpy}
    sortByDate={sortByDateSpy}
    filters={filters}
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with Start and End Dates', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text search', () => {
  wrapper.find('input').simulate('change', { target: { value: 'rent' } });
  expect(setTextFilterSpy).toHaveBeenLastCalledWith('rent');
});

test('should handle sortBy amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle sortBy date', () => {
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByDateSpy).toHaveBeenCalled();
});

test('should handle set Calendar Start and End dates', () => {
  const startDate = moment(0).add(540, 'months');
  const endDate = moment(0).add(542, 'months');

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setFilterStartDateSpy).toHaveBeenLastCalledWith(startDate);
  expect(setFilterEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle calendarFocused', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
