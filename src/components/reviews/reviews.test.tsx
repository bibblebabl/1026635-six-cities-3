import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Reviews from './reviews';

import reviews from '../../mocks/tests/reviews';

it(`<Reviews /> renders correctly`, () => {
  const component = renderer.create(
      <Reviews
        reviews={reviews}
      />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
