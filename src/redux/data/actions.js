import ModelOffer from "../../models/offer";
import {ActionCreators as AppActionCreators} from '../app/actions';

export const ActionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};

export const ActionCreators = {
  loadOffers: (offers) => {
    return {
      type: ActionTypes.LOAD_OFFERS,
      payload: {
        offers
      }
    };
  },
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
};
