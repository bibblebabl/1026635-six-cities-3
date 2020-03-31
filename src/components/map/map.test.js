import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offersLocations} from './mock';

it(`<Map /> renders correctly`, () => {
  const component = renderer.create(
      <Map offersLocations={offersLocations} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});


