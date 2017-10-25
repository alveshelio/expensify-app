/* eslint no-undef: 0 */
import moment from 'moment';
import uuid from 'uuid';

import { addExpense, editExpense, removeExpense } from '../../actions/expensesActions';
import { REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE } from '../../types/expensesTypes';

test('it should set up add expense action object with values', () => {
  const expenseId = uuid();
  const expenseCreatedAt = moment().format('MMM Do, YYYY');
  const expenseData = {
    id: expenseId,
    description: 'Watter Bill',
    amount: '45.54',
    note: 'The watter is expensive',
    createdAt: expenseCreatedAt,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('it should set up add expense action object with default values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      amount: 0,
      createdAt: undefined,
      description: undefined,
      note: undefined,
      id: expect.any(String),
    },
  });
});

test('it should set up remove expense action object', () => {
  const action = removeExpense('124');
  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    id: '124',
  });
});

test('it should set up edit expense action object', () => {
  const action = editExpense('123', { description: 'Watter Bill', amount: '45.54', note: 'The watter is expensive' });
  expect(action).toEqual({
    type: EDIT_EXPENSE,
    id: '123',
    expense: { description: 'Watter Bill', amount: '45.54', note: 'The watter is expensive' },
  });
});
