import ModelOffer from "../../models/offer";

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
        dispatch(ActionCreators.loadOffers(offersParsed));
      });
  },
};
