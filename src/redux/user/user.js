import {AuthorizationStatus, ActionTypes} from './actions';
import {extend} from '../../utils';

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};


const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_AUTH_STATUS:
      return extend(
          state,
          {authorizationStatus: payload.status}
      );
    case ActionTypes.SET_USER:
      return extend(
          state,
          {user: payload.user}
      );
  }

  return state;
};

export default reducer;
