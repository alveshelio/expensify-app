/* eslint no-undef: "off" */
import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../views/NotFound';

test('it should render the NotFound component', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
