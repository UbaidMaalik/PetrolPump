import {
  NEW_CUSTOMER,
  GET_CUSTOMERS,
  SINGLE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from "../actions/constants";
import { firestore } from "../firebase";
import { setAlert } from "./Alert";

export const newCustomer = (customer) => async (dispatch) => {
  try {
    const response = await firestore.collection("customers").add(customer);
    dispatch({
      type: NEW_CUSTOMER,
      payload: response,
    });

    dispatch(setAlert("success", "Customer added successfuly", 5000));
    console.log(response);
  } catch (error) {
    dispatch(setAlert("error", error.message, 5000));
  }
};

// Get All Customer
export const getCustomers = () => async (dispatch) => {
  try {
    const response = await firestore.collection("customers").get();

    const customers = [];

    response.forEach((doc) => {
      customers.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch({
      type: GET_CUSTOMERS,
      payload: customers,
    });
  } catch (error) {
    console.log(error);
  }
};

// Single Customer
export const singleCustomer = (id) => async (dispatch) => {
  try {
    const response = await firestore.collection("customers").doc(id).get();

    dispatch({
      type: SINGLE_CUSTOMER,
      payload: {
        id: response.id,
        ...response.data(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//Update Customer
export const updateCustomer = (id, data) => async (dispatch) => {
  try {
    await firestore.collection("customers").doc(id).set(data);

    dispatch(setAlert("success", "Customer updated successfully", 5000));
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const response = await firestore.collection("customers").doc(id).delete();

    dispatch({
      type: DELETE_CUSTOMER,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
