import { LOGIN, LOAD_USER, LOGOUT, AUTH_ERROR } from "../actions/constants";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
    case AUTH_ERROR:
      return {
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
