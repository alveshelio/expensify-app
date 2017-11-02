/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../views/Create';

import expenses from '../../fixtures/expenses';

test('should render Create Expense Page correctly', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<CreateExpensePage onSubmit={onSubmitSpy} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<CreateExpensePage onSubmit={onSubmitSpy} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  // expect(history).toHaveBeenLastCalledWith('/');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({ expense: expenses[0] });
});
