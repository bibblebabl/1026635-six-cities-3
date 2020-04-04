

import reducer, {initialState} from "./data";
// import {ActionTypes, ActionCreators} from "./actions";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});
