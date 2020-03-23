import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offersCities} from './mock';

it(`<Map /> renders correctly`, () => {
  const component = renderer.create(
      <Map offersCities={offersCities} />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();

  expect(component).toMatchSnapshot();
});


