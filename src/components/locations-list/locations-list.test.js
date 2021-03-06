import * as React from 'react';
import * as renderer from 'react-test-renderer';

import LocationsList from './locations-list';
import cities from '../../mocks/tests/cities';

const props = {
  cities,
  selectedCity: {
    "name": `Amsterdam`,
    "location": {
      "x": 52.37454,
      "y": 4.897976,
      "zoom": 13
    }
  },
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
