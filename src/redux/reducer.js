import offers from "../mocks/offers";
import reviews from "../mocks/reviews";
import {ActionTypes} from './actions';

export const initialState = {
  selectedCity: ``,
  currentOffer: null,
  offers,
  reviews,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CURRENT_OFFER:
      return {
        ...state,
        currentOffer: payload.id
      };

    case ActionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: payload.name
      };
  }

  return state;
};


export default reducer;


