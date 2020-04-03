import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

import offers from '../../mocks/offers';

it(`<Main /> renders correctly`, () => {

  const props = {
    offers,
    selectedCity: ``,
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
