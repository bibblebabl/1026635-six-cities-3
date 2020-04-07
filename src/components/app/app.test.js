import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import App from './app';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';
import {Router} from 'react-router-dom';
import history from '../../history/history';

export const initialState = {
  APP: {
    selectedCity: {
      "name": `Amsterdam`,
      "location": {
        "x": 52.37454,
        "y": 4.897976,
        "zoom": 13
      }
    },
    currentOfferId: 1,
    sortingType: `Popular`
  },
  DATA: {
    offers,
    reviews
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    user: null
  }
};

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

it(`<App /> renders correctly`, () => {
  const component = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  )
  .toJSON();

  expect(component).toMatchSnapshot();
});
