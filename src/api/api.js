import axios from "axios";

import {Error, config} from './config';

export const createAPI = (onUnauthorized) => {
  const api = axios.create(config);

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
