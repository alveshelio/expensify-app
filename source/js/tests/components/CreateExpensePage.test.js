/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../views/Create';

import expenses from '../../fixtures/expenses';

let onSubmit;
let history;
let wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreateExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render Create Expense Page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});
