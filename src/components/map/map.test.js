import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';

import {offersCities} from './mock';

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

it(`<Map /> renders correctly`, () => {
  const component = renderer.create(
      <Map offersCities={offersCities} />, {
        createNodeMock: () => document.createElement(`div`)
      }
  ).toJSON();

  expect(component).toMatchSnapshot();
});


