import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import {offer, reviews} from './mock';

it(`<Property /> renders correctly`, () => {
  const component = renderer.create(
      <Property
        offer={offer}
        reviews={reviews}
      />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
