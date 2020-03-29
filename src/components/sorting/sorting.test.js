import React from 'react';
import renderer from 'react-test-renderer';

import Sorting from './sorting';

it(`<Sorting /> renders correctly`, () => {
  const props = {
    sorting: `Popular`
  };

  const component = renderer.create(
      <Sorting {...props} />)
  .toJSON();

  expect(component).toMatchSnapshot();
});
