
import {ActionTypes} from './actions';
import {extend} from '../../utils';

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
      return extend(state,
          {offers: payload.offers}
      );
  }
  switch (type) {
    case ActionTypes.LOAD_NEARBY_OFFERS:
      return extend(state,
          {offersNearby: payload.offers}
      );
  }
  switch (type) {
    case ActionTypes.LOAD_FAVORITE_OFFERS:
      return extend(state,
          {favoriteOffers: payload.offers}
      );
  }
  switch (type) {
    case ActionTypes.LOAD_REVIEWS:
      return extend(state,
          {reviews: payload.reviews}
      );
  }
  switch (type) {
    case ActionTypes.SET_REVIEW_SUBMITING_STATUS:
      return extend(state,
          {reviewIsSubmiting: payload.status}
      );
  }


  return state;
};


export default reducer;
