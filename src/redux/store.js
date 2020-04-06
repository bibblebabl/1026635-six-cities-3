import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
import {createAPI} from '../api/api';

import {
  ActionCreators as UserActionCreators,
  Operations as UserOperations,
  AuthorizationStatus
} from './user/actions';

import {Operations as DataOperations} from './data/actions';

const onUnauthorized = () => {
  store.dispatch(UserActionCreators.setAuthStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);


store.dispatch(DataOperations.loadOffers());
store.dispatch(UserOperations.checkAuth());

export default store;

