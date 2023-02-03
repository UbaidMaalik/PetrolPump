import {
  NEW_PRICE,
  DELETE_PRICE,
  GET_PRICES,
  GET_CURRENT_PRICE,
} from "./constants";
import { firestore } from "../firebase";
import { setAlert } from "./Alert";

export const newPrice = (price) => async (dispatch) => {
  try {
    const doc = await firestore.collection("prices").add(price);

    dispatch({
      type: NEW_PRICE,
      payload: { id: doc.id, ...price },
    });

    dispatch(setAlert("success", "Fuel prices added successfuly", 5000));
  } catch (error) {
    dispatch(setAlert("error", error.message, 5000));
  }
};

// Get All Prices
export const getPrices = () => async (dispatch) => {
  try {
    const response = await firestore
      .collection("prices")
      .orderBy("date", "desc")
      .get();

    const prices = [];

    response.forEach((doc) => {
      prices.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch({
      type: GET_PRICES,
      payload: {
        prices,
        current_price: prices[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};
// Get latest Prices
export const getCurrentPrices = () => async (dispatch) => {
  try {
    const response = await firestore
      .collection("prices")
      .orderBy("date", "desc")
      .limit(1)
      .get();

    let current_prices;

    response.forEach((doc) => {
      current_prices = doc.data();
    });

    dispatch({
      type: GET_CURRENT_PRICE,
      payload: current_prices,
    });
  } catch (error) {
    console.log(error);
  }
};
//Delete
export const deletePrice = (id) => async (dispatch) => {
  try {
    const response = await firestore.collection("prices").doc(id).delete();

    dispatch({
      type: DELETE_PRICE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
