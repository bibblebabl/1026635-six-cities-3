import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import Places from './places';

import offers from '../../mocks/tests/offers';
import history from '../../history/history';

const props = {
  offers,
  sortingType: `Popular`,
  selectedCity: {
    "name": `Amsterdam`,
    "location": {
      "x": 52.37454,
      "y": 4.897976,
      "zoom": 13
    }
  },
  hoveredOfferId: 5,
  onChangeSortingType: jest.fn(),
  onPlaceCardMouseOver: jest.fn(),
  onTitleClick: jest.fn(),
  onFavoriteOfferStatus: jest.fn()
};

it(`<Places /> renders correctly`, () => {
  const component = renderer.create(
      <Router history={history}>
        <Places {...props} />
      </Router>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});

