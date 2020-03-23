import React from 'react';
import renderer from 'react-test-renderer';

import Reviews from './reviews';

import {reviews} from './mock';

it(`<Reviews /> renders correctly`, () => {
  const component = renderer.create(
      <Reviews
        reviews={reviews}
      />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
