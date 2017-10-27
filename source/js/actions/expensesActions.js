import uuid from 'uuid';
import moment from 'moment';

import { ADD_EXPENSE, EDIT_EXPENSE, FETCH_EXPENSE, FETCH_EXPENSES, REMOVE_EXPENSE } from '../types/expensesTypes';

export const addExpense = ({
  description,
  note,
  amount = 0,
  createdAt = undefined,
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const fetchExpense = id => ({
  type: FETCH_EXPENSE,
  id,
});

export const fetchExpenses = () => ({
  type: FETCH_EXPENSES,
});

export const editExpense = (id, expense) => ({
  type: EDIT_EXPENSE,
  id,
  expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});
