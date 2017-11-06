/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../views/Edit';

import expenses from '../../fixtures/expenses';

let onSubmit;
let history;
let wrapper;
let match;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  match = {
    params: {
      id: expenses[0].id,
    },
  };
  wrapper = shallow(<EditExpensePage
    editExpense={onSubmit}
    history={history}
    expense={expenses[0]}
    match={match}
  />);
});

test('should render Edit Expense Page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});
