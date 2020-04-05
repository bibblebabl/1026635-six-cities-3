import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';

import store from './redux/store';
import {Operations as DataOperations} from './redux/data/actions';

store.dispatch(DataOperations.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

