import MockAdapter from 'axios-mock-adapter';
import reducer, {initialState} from "./data";
import {createAPI} from '../../api/api';
import {Operations, ActionTypes} from './actions';
// import {ActionTypes as AppActionTypes} from '../app/actions';

import {mockOffer, parsedOffer} from './mocks';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});


it(`Reducer should make Operation.loadOffers with API request correctly`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadOffers = Operations.loadOffers();


  apiMock.onGet(`/hotels`)
         .reply(200, [mockOffer]);

  // Act & Assert
  return loadOffers(dispatch, null, api)
    .then(() => {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionTypes.LOAD_OFFERS,
        payload: {
          offers: [parsedOffer]
        }
      });
    });
});
