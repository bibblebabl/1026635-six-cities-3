import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

import offers from '../../mocks/tests/offers';

it(`<Main /> renders correctly`, () => {

  const props = {
    offers,
    cities: [`Amsterdam`, `Hamburg`, `Brussels`, `Cologne`],
    selectedCity: {
      "name": `Amsterdam`,
      "location": {
        "x": 52.37454,
        "y": 4.897976,
        "zoom": 13
      }
    },
    sortingType: `Popular`,
    handlePlaceCardMouseOver: jest.fn(),
    handleTitleClick: jest.fn(),
    handleCityNameClick: jest.fn(),
    handleChangeSortingType: jest.fn(),
  };


  const component = renderer.create(
      <Main {...props} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});
