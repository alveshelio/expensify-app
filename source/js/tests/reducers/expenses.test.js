/* eslint no-undef: "off" */
import moment from 'moment';

import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, FETCH_EXPENSES, FETCH_EXPENSE } from '../../types/expensesTypes';
import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../../fixtures/expenses';

test('it should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('it should create a new expense', () => {
  const expense = {
    id: 4,
    description: 'An expense from the test',
    amount: 5543,
    note: 'Some note on the expense created from the test',
    createdAt: expect.any(Number),
  };

  const state = expensesReducer(expenses, { type: ADD_EXPENSE, expense });

  expect(state).toEqual([
    {
      id: '1',
      description: 'Watter Bill',
      amount: 4554,
      note: 'The watter is expensive',
      createdAt: expenses[0].createdAt,
    },
    {
      id: '2',
      description: 'Rent',
      amount: 54554,
      note: 'January Rent',
      createdAt: expenses[1].createdAt,
    },
    {
      id: '3',
      description: 'Gum',
      amount: 154,
      note: '',
      createdAt: expenses[2].createdAt,
    },
    {
      id: 4,
      description: 'An expense from the test',
      amount: 5543,
      note: 'Some note on the expense created from the test',
      createdAt: moment().subtract(9, 'd').valueOf(),
    },
  ]);
  expect(state.length).toBe(4);
});

test('it should edit an existing expense', () => {
  const { id } = expenses[2];
  const expense = {
    id: '3',
    description: 'Gum updated',
    amount: 254,
    note: 'A new Flavor',
  };
  const state = expensesReducer(expenses, { type: EDIT_EXPENSE, id, expense });

  expect(state).toEqual([
    {
      id: '1',
      description: 'Watter Bill',
      amount: 4554,
      note: 'The watter is expensive',
      createdAt: expenses[0].createdAt,
    },
    {
      id: '2',
      description: 'Rent',
      amount: 54554,
      note: 'January Rent',
      createdAt: expenses[1].createdAt,
    },
    {
      id: '3',
      description: 'Gum updated',
      amount: 254,
      note: 'A new Flavor',
      createdAt: expenses[2].createdAt,
    },
  ]);
  expect(state[2]).not.toEqual(expenses[2]);
});

test('it should remove an expense from the expenses array', () => {
  const { id } = expenses[1];
  const state = expensesReducer(expenses, { type: REMOVE_EXPENSE, id });

  expect(state).toEqual([expenses[0], expenses[2]]);

  expect(state.length).toBe(2);
});

test('it should return one expense from the expenses array', () => {
  const { id } = expenses[0];
  const state = expensesReducer(expenses, { type: FETCH_EXPENSE, id });

  expect(state).toEqual([expenses[0]]);
});

test('it should return all expenses from the expenses array', () => {
  const state = expensesReducer(expenses, { type: FETCH_EXPENSES });

  expect(state).toEqual(expenses);
  expect(state.length).toBe(expenses.length);
});
