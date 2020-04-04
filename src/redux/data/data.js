
import {ActionTypes} from './actions';

export const initialState = {
  offers: [],
  reviews: [],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: payload.offers
      };
  }

  return state;
};


export default reducer;
