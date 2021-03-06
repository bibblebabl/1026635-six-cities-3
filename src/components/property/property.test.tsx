import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import Property from './property';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';
import history from '../../history/history';
import ModelUser from '../../models/user';
import user from '../../mocks/tests/user';

const [offer] = offers;

const props = {
  user: ModelUser.parseUser(user),
  offer,
  reviews,
  offersNearby: offers,
  onTitleClick: jest.fn(),
  onReviewSubmit: jest.fn(),
  onFavoriteOfferStatus: jest.fn(),
};

it(`<Property /> renders correctly`, () => {
  const component = renderer.create(
      <Router history={history}>
        <Property {...props} />
      </Router>,
      {
        createNodeMock: () => document.createElement(`div`)
      })
  .toJSON();
  expect(component).toMatchSnapshot();
});

