
import {ActionTypes} from './actions';

export const initialState = {
  offers: [],
  offersNearby: [],
  favoriteOffers: [],
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
    case ActionTypes.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        offersNearby: payload.offers
      };
  }
  switch (type) {
    case ActionTypes.LOAD_FAVORITE_OFFERS:
      return {
        ...state,
        favoriteOffers: payload.offers
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
