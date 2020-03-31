import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offersLocations, selectedCityElement} from './mock';

const props = {
  offersLocations,
  selectedCityElement,
  hoveredOfferId: 15
};

it(`<Map /> renders correctly`, () => {
  const component = renderer.create(
      <Map {...props} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});


