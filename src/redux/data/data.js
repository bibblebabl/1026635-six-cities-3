
import {ActionTypes} from './actions';

export const initialState = {
  offers: [],
  offersNearby: [],
  reviews: [],
  reviewIsSubmiting: false
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: payload.offers
      };
  }
  switch (type) {
    case ActionTypes.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: payload.offers
      };
  }
  switch (type) {
    case ActionTypes.LOAD_REVIEWS:
      return {
        ...state,
        reviews: payload.reviews
      };
  }
  switch (type) {
    case ActionTypes.SET_REVIEW_SUBMITING_STATUS:
      return {
        ...state,
        reviewIsSubmiting: payload.status
      };
  }

  return state;
};


export default reducer;
