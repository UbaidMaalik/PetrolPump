import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const defaultState = {};

export default createStore(
  rootReducer,
  defaultState,
  // composeWithDevTools()
  applyMiddleware(thunk)
);
