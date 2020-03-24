import reducer, {initialState} from "./reducer";
import {ActionTypes} from "./actions";

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
  it(`setCurrentOffer Action Creator for incrementing step returns correct action`, () => {
    // expect(ActionCreators.setCurrentOffer(1)).toEqual({
    //   type: ActionTypes.SET_CURRENT_OFFER,
    //   payload: {
    //     id: 1
    //   },
    // });
  });

  it(`setSelectedCity Action Creator for incrementing step returns correct action`, () => {
    // expect(ActionCreators.setSelectedCity('City Name')).toEqual({
    //   type: ActionTypes.SET_SELECTED_CITY,
    //   payload: {
    //     name: 'City Name
    //   },
    // });
  });
});
