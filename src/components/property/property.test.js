import React from 'react';
import renderer from 'react-test-renderer';

import Property from './property';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';
import {Router} from 'react-router-dom';
import history from '../../history/history';

const [offer] = offers;

it(`<Property /> renders correctly`, () => {
  const handlePlaceCardMouseOver = jest.fn();
  const handleTitleClick = jest.fn();

  const component = renderer.create(
      <Router history={history}>
        <Property
          offer={offer}
          reviews={reviews}
          recommendedOffers={offers}
          handlePlaceCardMouseOver={handlePlaceCardMouseOver}
          handleTitleClick={handleTitleClick}
        />
      </Router>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});

