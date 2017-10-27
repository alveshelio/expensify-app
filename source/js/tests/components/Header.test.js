/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Global/Header';

test('should render Header component correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
