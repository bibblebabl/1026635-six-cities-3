

import reducer, {initialState} from "./app";
import {ActionTypes, ActionCreators} from "./actions";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Reducer should change currentOfferId ID`, () => {
  expect(reducer({
    currentOfferId: null,
  }, {
    type: ActionTypes.SET_CURRENT_OFFER,
    payload: {
      id: 1
    },
  })).toEqual({
    currentOfferId: 1
  });

  expect(reducer({
    currentOfferId: 1,
  }, {
    type: ActionTypes.SET_CURRENT_OFFER,
    payload: {
      id: 0
    },
  })).toEqual({
    currentOfferId: 0,
  });
});

it(`Reducer should set City Name string`, () => {
  expect(reducer({
    selectedCity: ``
  }, {
    type: ActionTypes.SET_SELECTED_CITY,
    payload: {
      city: {
        "name": `Cologne`,
        "location": {
          "x": 50.938361,
          "y": 6.959974,
          "zoom": 13
        }
      },
    },
  })).toEqual({
    selectedCity: {
      "name": `Cologne`,
      "location": {
        "x": 50.938361,
        "y": 6.959974,
        "zoom": 13
      }
    },
  });
});

it(`Reducer should set Sorting Type string`, () => {
  expect(reducer({
    sortingType: `Popular`
  }, {
    type: ActionTypes.SET_SORTING_TYPE,
    payload: {
      type: `Some Sorting`
    },
  })).toEqual({
    sortingType: `Some Sorting`
  });
});

describe(`Action Creators work correctly`, () => {
  it(`setCurrentOfferId Action Creator for setting current offer returns correct action`, () => {
    const dispatch = jest.fn();
    const action = ActionCreators.setCurrentOfferId(1)(dispatch);

    expect(action).toEqual(dispatch({
      type: ActionTypes.SET_CURRENT_OFFER,
      payload: {
        id: 1
      },
    }));
  });

  it(`setSelectedCity Action Creator for setting selected city returns correct action`, () => {
    const dispatch = jest.fn();
    const mockCity = {
      "name": `Amsterdam`,
      "location": {
        "x": 52.37454,
        "y": 4.897976,
        "zoom": 13
      }
    };
    const action = ActionCreators.setSelectedCity(mockCity)(dispatch);

    expect(action).toEqual(dispatch({
      type: ActionTypes.SET_SELECTED_CITY,
      payload: {
        city: mockCity
      },
    }));
  });
});
