import ModelOffer from "../../models/offer";
import {ActionCreators as AppActionCreators} from '../app/actions';
import ModelReview from "../../models/review";

export const ActionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_REVIEW_SUBMITING_STATUS: `SET_REVIEW_SUBMITING_STATUS`,
  SET_FAVORITE_OFFER_STATUS: `SET_FAVORITE_OFFER_STATUS`,
};

export const ActionCreators = {
  loadOffers: (offers) => ({
    type: ActionTypes.LOAD_OFFERS,
    payload: {
      offers
    }
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionTypes.LOAD_NEARBY_OFFERS,
    payload: {
      offers
    }
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionTypes.LOAD_FAVORITE_OFFERS,
    payload: {
      offers
    }
  }),
  loadReviews: (reviews) => ({
    type: ActionTypes.LOAD_REVIEWS,
    payload: {
      reviews
    }
  }),
  setReviewSubmitingStatus: (status) => ({
    type: ActionTypes.SET_REVIEW_SUBMITING_STATUS,
    payload: {
      status
    }
  }),
  setFavoriteOfferStatus: (status) => ({
    type: ActionTypes.SET_FAVORITE_OFFER_STATUS,
    payload: {
      status
    }
  })
};

export const Operations = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersParsed = ModelOffer.parseOffers(response.data);
        const firstCity = offersParsed[0].city;
        dispatch(ActionCreators.loadOffers(offersParsed));
        dispatch(AppActionCreators.setSelectedCity(firstCity));
        return offersParsed;
      });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const offersParsed = ModelOffer.parseOffers(response.data);
        dispatch(ActionCreators.loadNearbyOffers(offersParsed));
      });
  },
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        const offersParsed = ModelReview.parseReviews(response.data);
        dispatch(ActionCreators.loadReviews(offersParsed));
      });
  },
  submitReview: (offerId, review) => (dispatch, getState, api) => {
    dispatch(ActionCreators.setReviewSubmitingStatus(true));

    return api.post(`/comments/${offerId}`, review)
        .then((response) => {
          const reviews = ModelReview.parseReviews(response.data);
          dispatch(ActionCreators.loadReviews(reviews));
          dispatch(ActionCreators.setReviewSubmitingStatus(false));
        });
  },
  loadFavoritesOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteOffers = ModelOffer.parseOffers(response.data);
        dispatch(ActionCreators.loadFavoriteOffers(favoriteOffers));
      });
  },
  setFavoriteOfferStatus: (offerId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${Number(!status)}`)
      .then((response) => {
        const offer = ModelOffer.parseOffer(response.data);
        dispatch(ActionCreators.setFavoriteOfferStatus(offer));
        dispatch(Operations.loadFavoritesOffers());
        dispatch(Operations.loadOffers());
      });
  },
};
