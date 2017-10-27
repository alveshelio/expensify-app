/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/expenses/ExpenseListItem';
import expenses from '../../fixtures/expenses';

test('it should render ExpenseListItem with an expense', () => {
  const wrapper = shallow(<ExpenseListItem
    {...expenses[0]}
    onRemoveHandle={() => console.log('removed')}
  />);

  expect(wrapper).toMatchSnapshot();
});
