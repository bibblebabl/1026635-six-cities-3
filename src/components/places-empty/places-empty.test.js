import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PlacesEmpty from './places-empty';
it(`<PlacesEmpty /> renders correctly`, () => {
  const component = renderer.create(
      <PlacesEmpty />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
