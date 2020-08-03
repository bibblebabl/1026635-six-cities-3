import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Router} from 'react-router-dom';

import history from '../../history/history';
import ModelUser from '../../models/user';

import user from '../../mocks/tests/user';
import Header from './header';


const props = {
  user: ModelUser.parseUser(user),
};

it(`<Header /> renders correctly`, () => {

  const component = renderer.create(
      <Router history={history}>
        <Header {...props} />
      </Router>
  )
    .toJSON();
  expect(component).toMatchSnapshot();
});
