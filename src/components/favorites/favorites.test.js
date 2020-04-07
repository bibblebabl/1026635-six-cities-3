import React from 'react';
import renderer from 'react-test-renderer';

import {Router} from 'react-router-dom';

import Favorites from './favorites';

import history from '../../history/history';
import ModelUser from '../../models/user';

import offers from '../../mocks/tests/offers';
import user from '../../mocks/tests/user';

const handleTitleClick = jest.fn();
const handleFavoriteOfferStatus = jest.fn();

const props = {
  favoriteOffers: offers.map((offer) => Object.assign({}, offer, {isFavorite: true})),
  user: ModelUser.parseUser(user),
  handleTitleClick,
  handleFavoriteOfferStatus,
};

it(`Favorites renders correctly`, () => {

  const component = renderer.create(
      <Router history={history}>
        <Favorites {...props} />
      </Router>
  )
    .toJSON();
  expect(component).toMatchSnapshot();
});
