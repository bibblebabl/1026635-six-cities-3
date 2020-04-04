import React from 'react';
import renderer from 'react-test-renderer';

import Places from './places';

import offers from '../../mocks/tests/offers';

const props = {
  offers,
  sortingType: `Popular`,
  selectedCity: `Cologne`,
  hoveredOfferId: 5,
  handleChangeSortingType: jest.fn(),
  handlePlaceCardMouseOver: jest.fn(),
  handleTitleClick: jest.fn()
};

it(`<Places /> renders correctly`, () => {
  const component = renderer.create(
      <Places {...props} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});

