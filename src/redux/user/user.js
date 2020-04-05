import {AuthorizationStatus, ActionTypes} from './actions';

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        authorizationStatus: payload.status,
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: payload.user,
      };
  }

  return state;
};

export default reducer;
