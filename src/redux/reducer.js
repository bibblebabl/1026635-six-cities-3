import offers from "../mocks/offers";
import reviews from "../mocks/reviews";
import {ActionTypes} from './actions';

const initialState = {
  offers,
  reviews,
  currentOffer: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CURRENT_OFFER:
      return {
        ...state,
        currentOffer: payload.id
      };
  }

  return state;
};


export default reducer;


