import {combineReducers} from "redux";

// reducers
import dataReducer from "./data/data";
import userReducer from "./user/user";
import appReducer from "./app/app";

import NameSpaces from "./name-spaces";

export default combineReducers({
  [NameSpaces.DATA]: dataReducer,
  [NameSpaces.USER]: userReducer,
  [NameSpaces.APP]: appReducer
});
