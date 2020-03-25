import React from 'react';
import renderer from 'react-test-renderer';

import LocationsList from './locations-list';

import {getUniqueArray, getCities} from '../../utils';

import offers from '../../mocks/tests/offers';

const MAX_CITIES = 4;

const cities = getUniqueArray(getCities(offers)).slice(0, MAX_CITIES);

const props = {
  cities,
  selectedCity: ``,
  onCityNameClick: jest.fn()
};

it(`<LocationsList /> renders correctly`, () => {
  const component = renderer.create(
      <LocationsList {...props} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});
