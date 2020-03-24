export const ActionTypes = {
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`
};

export const ActionCreators = {
  setCurrentOffer: (id) => (dispatch) => {
    dispatch({
      type: ActionTypes.SET_FIELD_OF_BUSINESS,
      payload: {
        id
      }
    });
  }
};
