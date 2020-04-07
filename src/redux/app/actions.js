export const ActionTypes = {
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  SET_SELECTED_CITY: `SET_SELECTED_CITY`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
};

export const ActionCreators = {
  setCurrentOfferId: (id) => ({
    type: ActionTypes.SET_CURRENT_OFFER,
    payload: {
      id
    }
  }),
  setHoveredOfferId: (id) => ({
    type: ActionTypes.SET_HOVERED_OFFER,
    payload: {
      id
    }
  }),
  setSelectedCity: (city) => ({
    type: ActionTypes.SET_SELECTED_CITY,
    payload: {
      city
    }
  }),
  setSortingType: (type) => ({
    type: ActionTypes.SET_SORTING_TYPE,
    payload: {
      type
    }
  })
};

