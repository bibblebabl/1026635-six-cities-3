export const ActionTypes = {
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  SET_SELECTED_CITY: `SET_SELECTED_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

export const ActionCreators = {
  setcurrentOfferId: (id) => (dispatch) => {
    dispatch({
      type: ActionTypes.SET_CURRENT_OFFER,
      payload: {
        id
      }
    });
  },
  sethoveredOfferId: (id) => (dispatch) => {
    dispatch({
      type: ActionTypes.SET_HOVERED_OFFER,
      payload: {
        id
      }
    });
  },
  setSelectedCity: (name) => (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_CITY,
      payload: {
        name
      }
    });
  },
  setSortingType: (type) => (dispatch)=> {
    dispatch({
      type: ActionTypes.SET_SORTING_TYPE,
      payload: {
        type
      }
    });
  }
};