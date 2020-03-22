import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import {offer, reviews, offers} from './mock';

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
