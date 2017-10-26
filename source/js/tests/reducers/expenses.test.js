/* eslint no-undef: "off" */
import moment from 'moment';

import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, FETCH_EXPENSES, FETCH_EXPENSE } from '../../types/expensesTypes';
import expensesReducer from '../../reducers/expensesReducer';

const expense1CreatedAt = moment().subtract(14, 'd');
const expense2CreatedAt = moment().subtract(6, 'd');
const expense3CreatedAt = moment().subtract(2, 'd');
const expense4CreatedAt = moment().subtract(9, 'd');

const expenses = [
  {
    id: 1,
    description: 'Watter Bill',
    amount: '45.54',
    note: 'The watter is expensive',
    createdAt: expense1CreatedAt.format('MMM Do, YYYY'),
  },
  {
    id: 2,
    description: 'Rent',
    amount: '545.54',
    note: 'January Rent',
    createdAt: expense2CreatedAt.format('MMM Do, YYYY'),
  },
  {
    id: 3,
    description: 'Gum',
    amount: '1.54',
    note: '',
    createdAt: expense3CreatedAt.format('MMM Do, YYYY'),
  },
];

test('it should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('it should create a new expense', () => {
  const expense = {
    id: 4,
    description: 'An expense from the test',
    amount: 55.43,
    note: 'Some note on the expense created from the test',
    createdAt: expense4CreatedAt.format('MMM Do, YYYY'),
  };

  const state = expensesReducer(expenses, { type: ADD_EXPENSE, expense });

  expect(state).toEqual([
    {
      id: 1,
      description: 'Watter Bill',
      amount: '45.54',
      note: 'The watter is expensive',
      createdAt: expense1CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 2,
      description: 'Rent',
      amount: '545.54',
      note: 'January Rent',
      createdAt: expense2CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 3,
      description: 'Gum',
      amount: '1.54',
      note: '',
      createdAt: expense3CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 4,
      description: 'An expense from the test',
      amount: 55.43,
      note: 'Some note on the expense created from the test',
      createdAt: expense4CreatedAt.format('MMM Do, YYYY'),
    },
  ]);
  expect(state.length).toBe(4);
});

test('it should edit an existing expense', () => {
  const id = 3;
  const expense = {
    id: 3,
    description: 'Gum updated',
    amount: '2.54',
    note: 'A new Flavor',
  };
  const state = expensesReducer(expenses, { type: EDIT_EXPENSE, id, expense });

  expect(state).toEqual([
    {
      id: 1,
      description: 'Watter Bill',
      amount: '45.54',
      note: 'The watter is expensive',
      createdAt: expense1CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 2,
      description: 'Rent',
      amount: '545.54',
      note: 'January Rent',
      createdAt: expense2CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 3,
      description: 'Gum updated',
      amount: '2.54',
      note: 'A new Flavor',
      createdAt: expense3CreatedAt.format('MMM Do, YYYY'),
    },
  ]);
  expect(state[2]).not.toEqual(expenses[2]);
});

test('it should remove an expense from the expenses array', () => {
  const id = 2;
  const state = expensesReducer(expenses, { type: REMOVE_EXPENSE, id });

  expect(state).toEqual([
    {
      id: 1,
      description: 'Watter Bill',
      amount: '45.54',
      note: 'The watter is expensive',
      createdAt: expense1CreatedAt.format('MMM Do, YYYY'),
    },
    {
      id: 3,
      description: 'Gum',
      amount: '1.54',
      note: '',
      createdAt: expense3CreatedAt.format('MMM Do, YYYY'),
    },
  ]);

  expect(state.length).toBe(2);
});

test('it should return one expense from the expenses array', () => {
  const id = 1;
  const state = expensesReducer(expenses, { type: FETCH_EXPENSE, id });

  expect(state).toEqual([
    {
      id: 1,
      description: 'Watter Bill',
      amount: '45.54',
      note: 'The watter is expensive',
      createdAt: expense1CreatedAt.format('MMM Do, YYYY'),
    },
  ]);
});

test('it should return all expenses from the expenses array', () => {
  const state = expensesReducer(expenses, { type: FETCH_EXPENSES });

  expect(state).toEqual(expenses);
  expect(state.length).toBe(expenses.length);
});
