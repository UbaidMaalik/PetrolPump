import { combineReducers } from "redux";

import auth from "./auth";
import alert from "./alert";
import customer from "./customer";
import price from "./price";
import transection from "./transection";

export default combineReducers({
  auth,
  customer,
  alert,
  price,
  transection,
});
