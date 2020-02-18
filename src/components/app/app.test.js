import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    title: `Beautiful & luxurious studio at great location`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    type: `apartment`,
    isFavorite: false,
    isPremium: false,
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Beautiful & luxurious studio at great location`,
    image: `img/apartment-02.jpg`,
    price: 120,
    rating: 4.8,
    type: `apartment`,
    isFavorite: true,
    isPremium: false,
  },
];

it(`<App /> renders correctly`, () => {
  const component = renderer.create(<App offers={offers} />).toJSON();

  expect(component).toMatchSnapshot();
});
