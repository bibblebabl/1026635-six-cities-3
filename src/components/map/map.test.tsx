import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Map from './map';

import {offersLocations} from './mock';

const props = {
  offersLocations,
  selectedCity: {
    "name": `Amsterdam`,
    "location": {
      "x": 52.37454,
      "y": 4.897976,
      "zoom": 13
    }
  },
  hoveredOfferId: 15
};

it(`<Map /> renders correctly`, () => {
  document.body.innerHTML = `<div id="map"></div>`;

  const component = renderer.create(
      <Map {...props} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});


