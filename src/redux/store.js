import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer';

const middlewares = [];

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middlewares),
));

export default store;

