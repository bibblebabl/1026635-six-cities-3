import {ActionTypes} from './actions';
import {extend} from '../../utils';

export const initialState = {
  selectedCity: {
    "name": `Amsterdam`,
    "location": {
      "x": 52.37454,
      "y": 4.897976,
      "zoom": 13
    }
  },
  currentOfferId: null,
  hoveredOfferId: null,
  sortingType: `Popular`,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CURRENT_OFFER:
      return extend(
          state,
          {currentOfferId: payload.id}
      );


    case ActionTypes.SET_HOVERED_OFFER:
      return extend(
          state,
          {hoveredOfferId: payload.id}
      );

    case ActionTypes.SET_SELECTED_CITY:
      return extend(state,
          {selectedCity: payload.city}
      );

    case ActionTypes.SET_SORTING_TYPE:
      return extend(state,
          {sortingType: payload.type}
      );
  }

  return state;
};


export default reducer;


