import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

import offers from '../../mocks/tests/offers';
import cities from '../../mocks/tests/cities';
import {Router} from 'react-router-dom';
import history from '../../history/history';

it(`<Main /> renders correctly`, () => {

  const props = {
    offers,
    cities,
    selectedCity: {
      "name": `Amsterdam`,
      "location": {
        "x": 52.37454,
        "y": 4.897976,
        "zoom": 13
      }
    },
    user: null,
    sortingType: `Popular`,
    onPlaceCardMouseOver: jest.fn(),
    onTitleClick: jest.fn(),
    onCityNameClick: jest.fn(),
    onChangeSortingType: jest.fn(),
  };


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
