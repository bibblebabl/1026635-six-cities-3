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
import {ActionCreators as AppActionCreators} from './app/actions';

import history from '../history/history';
import Routes from '../history/routes';

const onUnauthorized = () => {
  store.dispatch(UserActionCreators.setAuthStatus(AuthorizationStatus.NO_AUTH));
  history.push(Routes.SIGN_IN);
};

const api = createAPI(onUnauthorized);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);


store.dispatch(DataOperations.loadOffers())
  .then((offersParsed) => AppActionCreators.setSelectedCity(offersParsed[0].city))
  .then(() => store.dispatch(UserOperations.checkAuth()))
  .then(() => store.dispatch(DataOperations.loadFavoritesOffers()));


export default store;

