import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Main from './main';

import offers from '../../mocks/tests/offers';
import cities from '../../mocks/tests/cities';
import {Router} from 'react-router-dom';
import history from '../../history/history';

const props = {
  offers,
  user: null,
  cities,
  selectedCity: {
    "name": `Amsterdam`,
    "location": {
      "x": 52.37454,
      "y": 4.897976,
      "zoom": 13
    }
  },
  hoveredOfferId: 11,
  sortingType: `Popular`,
  onPlaceCardMouseOver: jest.fn(),
  onTitleClick: jest.fn(),
  onCityNameClick: jest.fn(),
  onChangeSortingType: jest.fn(),
  onFavoriteOfferStatus: jest.fn(),
};

it(`<Main /> renders correctly`, () => {
  const component = renderer.create(
      <Router history={history}>
        <Main
          {...props}
        />
      </Router>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});
