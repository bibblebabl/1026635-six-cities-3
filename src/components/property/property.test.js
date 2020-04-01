import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';

const [offer] = offers;

it(`<Property /> renders correctly`, () => {
  const handlePlaceCardMouseOver = jest.fn();
  const handleTitleClick = jest.fn();

  const component = renderer.create(
      <Property
        offer={offer}
        reviews={reviews}
        recommendedOffers={offers}
        handlePlaceCardMouseOver={handlePlaceCardMouseOver}
        handleTitleClick={handleTitleClick}
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});

