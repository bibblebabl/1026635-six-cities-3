import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';
import {createAPI} from '../api/api';
import {ActionCreators as UserActionCreators, AuthorizationStatus} from '../redux/user/actions';

const onUnauthorized = () => {
  store.dispatch(UserActionCreators.setAuthStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const middlewares = [thunk.withExtraArgument(api)];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

