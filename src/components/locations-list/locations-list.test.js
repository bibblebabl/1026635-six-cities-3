import React from 'react';
import renderer from 'react-test-renderer';

import LocationsList from './locations-list';

const cities = [
  `Cologne`,
  `Hamburg`,
  `Brussels`,
  `Dusseldorf`,
  `Paris`,
  `Amsterdam`
];

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
