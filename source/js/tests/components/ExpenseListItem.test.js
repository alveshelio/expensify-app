/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/expenses/ExpenseListItem';
import expenses from '../../fixtures/expenses';

test('it should render ExpenseListItem with an expense', () => {
  const onRemoveHandler = jest.fn();
  const wrapper = shallow(<ExpenseListItem
    {...expenses[0]}
    onRemoveHandle={onRemoveHandler}
  />);
  wrapper.find('button').simulate('click');

  expect(wrapper).toMatchSnapshot();
});

test('it should remove an expense on Remove click', () => {
  const onRemoveHandler = jest.fn();
  const wrapper = shallow(<ExpenseListItem
    {...expenses[0]}
    onRemoveHandle={onRemoveHandler}
  />);
  wrapper.find('button').simulate('click');
  expect(onRemoveHandler).toHaveBeenLastCalledWith(expenses[0].id);
});
