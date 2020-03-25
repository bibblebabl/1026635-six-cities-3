import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';

const offer = offers[0];

it(`<Property /> renders correctly`, () => {
  const component = renderer.create(
      <Property
        offer={offer}
        reviews={reviews}
        recommendedOffers={offers}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});
