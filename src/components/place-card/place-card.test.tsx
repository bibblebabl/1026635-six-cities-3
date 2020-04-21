import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import offers from '../../mocks/tests/offers';
import {Router} from 'react-router-dom';
import history from '../../history/history';

const [offer] = offers;

it(`<PlaceCard /> renders correctly`, () => {
  const fn = jest.fn()
  const component = renderer.create(
      <Router history={history}>
        <PlaceCard
          offer={offer}
          onMouseOver={fn}
          onTitleClick={fn}
          onFavoriteOfferStatus={fn}
        />
      </Router>
  ).toJSON();
  expect(component).toMatchSnapshot();
});
