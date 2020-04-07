import React from 'react';
import renderer from 'react-test-renderer';

import {Router} from 'react-router-dom';

import NoFavorites from './no-favorites';

import history from '../../history/history';
import ModelUser from '../../models/user';

import user from '../../mocks/tests/user';

const props = {
  user: ModelUser.parseUser(user),
};
it(`NoFavorites renders correctly`, () => {

  const component = renderer.create(
      <Router history={history}>
        <NoFavorites {...props} />
      </Router>
  )
    .toJSON();
  expect(component).toMatchSnapshot();
});
