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

it(`<LocationsList /> renders correctly`, () => {
  const component = renderer.create(
      <LocationsList cities={cities} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});
