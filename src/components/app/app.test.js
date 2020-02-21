import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

import {offers} from './mock';

it(`<App /> renders correctly`, () => {
  const component = renderer.create(<App offers={offers} />).toJSON();

  expect(component).toMatchSnapshot();
});
