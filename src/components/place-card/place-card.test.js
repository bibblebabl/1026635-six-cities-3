import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import offers from '../../mocks/tests/offers';

const offer = offers[0];

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
