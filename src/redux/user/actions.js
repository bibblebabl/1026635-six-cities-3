import ModelUser from "../../models/user";

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ActionTypes = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_USER: `SET_USER`
};

export const ActionCreators = {
  setAuthStatus: (status) => {
    return {
      type: ActionTypes.SET_AUTH_STATUS,
      payload: {
        status
      },
    };
  },
  setUser: (user) => {
    return {
      type: ActionTypes.SET_AUTH_STATUS,
      payload: {
        user
      },
    };
  }
};

export const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreators.setAuthStatus(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
    .then((response) => dispatch(ActionCreators.setUser(ModelUser.parseUser(response.data))))
    .then(() => dispatch(ActionCreators.setAuthStatus(AuthorizationStatus.AUTH)));
  }
};
