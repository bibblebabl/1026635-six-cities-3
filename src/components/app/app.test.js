import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

import App from './app';

import offers from '../../mocks/tests/offers';
import reviews from '../../mocks/tests/reviews';

export const initialState = {
  selectedCity: `Amsterdam`,
  currentOfferId: 1,
  offers,
  reviews,
};

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

it(`<App /> renders correctly`, () => {
  const component = renderer.create(
      <Provider store={store}>
        <App offers={offers} reviews={reviews} />
      </Provider>,
      {
        createNodeMock: () => document.createElement(`div`)
      }
  )
  .toJSON();

  expect(component).toMatchSnapshot();
});
