import { auth } from "../firebase";
import { LOGIN, AUTH_ERROR, LOGOUT, LOAD_USER } from "../actions/constants";
import { setAlert } from "./Alert";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    dispatch({
      type: LOGIN,
      payload: response.user,
    });
    dispatch(setAlert("success", "Logged in successfully", 5000));
  } catch (error) {
    dispatch(setAlert("error", error.message, 5000));
    dispatch({ type: AUTH_ERROR });
  }
};

// Load user
export const loadUser = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return dispatch({
        type: LOAD_USER,
        payload: user,
      });
    }
    dispatch({ type: AUTH_ERROR });
  });
};

// Log user out
export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
