import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

import {offers} from './mock';

it(`<Main /> renders correctly`, () => {
  const component = renderer.create(
      <Main offers={offers} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
