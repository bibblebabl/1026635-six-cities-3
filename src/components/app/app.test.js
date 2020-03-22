import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

import {offers, reviews} from './mock';

it(`<App /> renders correctly`, () => {
  const component = renderer.create(
      <App offers={offers} reviews={reviews} />,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  )
  .toJSON();

  expect(component).toMatchSnapshot();
});
