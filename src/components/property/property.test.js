import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import {offer} from './mock';

it(`<Property /> renders correctly`, () => {
  const component = renderer.create(
      <Property offer={offer} />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
