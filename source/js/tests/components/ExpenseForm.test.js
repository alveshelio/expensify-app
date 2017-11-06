/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/expenses/forms/ExpenseForm';
import expenses from '../../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm onSubmit={() => console.log('form submitted')} />);
  expect(wrapper).toMatchSnapshot();
});

test('it should render ExpenseForm with empty message', () => {
  const wrapper = shallow(<ExpenseForm
    onSubmit={() => console.log('form submitted')}
    expense={expenses[0]}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm onSubmit={() => console.log()} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(Object.keys(wrapper.state('errors')).length).toBeGreaterThan(0);
});

test('should set description on input change', () => {
  const value = 'new description!!';
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('input').at(0).simulate('change', {
    target: { name: 'description', value },
  });
  expect(wrapper.state('data').description).toBe(value);
});

test('should set amount on input change with valid input', () => {
  const value = '20.25';
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('input').at(1).simulate('change', {
    target: { name: 'amount', value },
  });
  expect(wrapper.state('data').amount).toBe(value);
});

test('should NOT set amount on input change with invalid input', () => {
  const value = '20.253';
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('input').at(1).simulate('change', {
    target: { name: 'amount', value },
  });
  expect(wrapper.state('data').amount).toBe('');
});

test('should set note on input change', () => {
  const value = 'new note!!';
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('input').at(2).simulate('change', {
    target: { name: 'note', value },
  });
  expect(wrapper.state('data').note).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const { description, note, amount, createdAt } = expenses[0];
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('data').description).toBe('');
  expect(wrapper.state('data').note).toBe('');
  expect(wrapper.state('data').amount).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description,
    amount,
    note,
    createdAt,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('data').createdAt).toEqual(now);
});

test('should set calendarFocused onFocusChange', () => {
  const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(wrapper.state('calendarFocused')).toBe(true);
});
