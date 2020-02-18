import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import {offer} from './mock';

it(`<PlaceCard /> renders correctly`, () => {
  const component = renderer.create(
      <PlaceCard
        offer={offer}
        onMouseOver={() => {}}
        onTitleClick={() => {}}
      />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
