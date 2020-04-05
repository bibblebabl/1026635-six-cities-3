import MockAdapter from 'axios-mock-adapter';
import reducer, {initialState} from "./user";

import {Operations, AuthorizationStatus, ActionTypes} from './actions';

import {createAPI} from '../../api/api';

const api = createAPI(Function);

const user = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

describe(`user reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`reducer updates authorizationStatus`, () => {
    expect(reducer({
      ...initialState,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionTypes.SET_AUTH_STATUS,
      payload: {
        status: AuthorizationStatus.AUTH
      }
    })).toEqual({
      ...initialState,
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`it should set user`, () => {
    expect(reducer({
      ...initialState,
      user: null
    }, {
      type: ActionTypes.SET_USER,
      payload: {
        user
      }
    })).toEqual({
      ...initialState,
      user
    });
  });
});


describe(`Operations works correctly`, () => {
  it(`checkAuth operation works correctly`, () => {
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const checkAuth = Operations.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, user);

    return checkAuth(dispatch, Function, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.SET_AUTH_STATUS,
          payload: {
            status: AuthorizationStatus.AUTH
          }
        });
      });
  });
});

