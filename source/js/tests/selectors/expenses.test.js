/* eslint no-undef: "off" */
import moment from 'moment';

import selectExpenses from '../../selectors/expensesSelectors';

const expenses = [
  {
    id: 1,
    description: 'Watter Bill',
    amount: '45.54',
    note: 'The watter is expensive',
    createdAt: moment().subtract(14, 'd'),
  },
  {
    id: 2,
    description: 'Rent',
    amount: '545.54',
    note: 'January Rent',
    createdAt: moment().subtract(6, 'd'),
  },
  {
    id: 3,
    description: 'Gum',
    amount: '1.54',
    note: '',
    createdAt: moment().subtract(2, 'd'),
  },
];

test('should filter by text value', () => {
  const filters = {
    sortBy: 'date',
    text: 'e',
    startDate: moment().subtract(20, 'd'),
    endDate: moment().subtract(1, 'd'),
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should filter by start and end date value', () => {
  const filters = {
    sortBy: 'date',
    text: '',
    startDate: moment().subtract(15, 'd'),
    endDate: moment().subtract(5, 'd'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should filter by sortBy value', () => {
  const filters = {
    sortBy: 'amount',
    text: '',
    startDate: moment().subtract(10, 'd'),
    endDate: moment().subtract(1, 'd'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});
