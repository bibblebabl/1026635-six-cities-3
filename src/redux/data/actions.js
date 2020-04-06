import ModelOffer from "../../models/offer";
import {ActionCreators as AppActionCreators} from '../app/actions';
import ModelReview from "../../models/review";

export const ActionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_REVIEW_SUBMITING_STATUS: `SET_REVIEW_SUBMITING_STATUS`,
};

export const ActionCreators = {
  loadOffers: (offers) => ({
    type: ActionTypes.LOAD_OFFERS,
    payload: {
      offers
    }
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionTypes.LOAD_OFFERS_NEARBY,
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
};

export const Operations = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offersParsed = ModelOffer.parseOffers(response.data);
        const firstCity = offersParsed[0].city;
        dispatch(ActionCreators.loadOffers(offersParsed));
        dispatch(AppActionCreators.setSelectedCity(firstCity));
      });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const offersParsed = ModelOffer.parseOffers(response.data);
        dispatch(ActionCreators.loadOffers(offersParsed));
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
  }
};
