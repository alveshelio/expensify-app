/* eslint no-undef: "off" */

import React from 'react';
import { shallow } from 'enzyme';

import Help from '../../views/Help';

test('it should render Help page', () => {
  const wrapper = shallow(<Help />);
  expect(wrapper).toMatchSnapshot();
});
