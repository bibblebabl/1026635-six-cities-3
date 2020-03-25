// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

import reducer, {initialState} from "./reducer";
import {ActionTypes, ActionCreators} from "./actions";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should change currentOffer ID`, () => {
  expect(reducer({
    currentOffer: null,
  }, {
    type: ActionTypes.SET_CURRENT_OFFER,
    payload: {
      id: 1
    },
  })).toEqual({
    currentOffer: 1
  });

  expect(reducer({
    currentOffer: 1,
  }, {
    type: ActionTypes.SET_CURRENT_OFFER,
    payload: {
      id: 0
    },
  })).toEqual({
    currentOffer: 0,
  });
});

it(`Reducer should set City Name string`, () => {
  expect(reducer({
    selectedCity: ``
  }, {
    type: ActionTypes.SET_SELECTED_CITY,
    payload: {
      name: `City Name`
    },
  })).toEqual({
    selectedCity: `City Name`
  });
});

describe(`Action Creators work correctly`, () => {

  it(`setCurrentOffer Action Creator for setting current offer returns correct action`, () => {
    const dispatch = jest.fn();
    const action = ActionCreators.setCurrentOffer(1)(dispatch);

    expect(action).toEqual(dispatch({
      type: ActionTypes.SET_CURRENT_OFFER,
      payload: {
        id: 1
      },
    }));
  });

  it(`setSelectedCity Action Creator for setting selected city returns correct action`, () => {
    const dispatch = jest.fn();
    const action = ActionCreators.setSelectedCity(`City`)(dispatch);

    expect(action).toEqual(dispatch({
      type: ActionTypes.SET_SELECTED_CITY,
      payload: {
        name: `City`
      },
    }));
  });
});
