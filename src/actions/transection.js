import {
  GET_TRANSECTIONS,
  NEW_TRANSECTION,
  SINGLE_TRANSECTION,
  DELETE_TRANSECTION,
  TOTAL_TRANSECTION,
} from "./constants";
import { firestore } from "../firebase";
import { setAlert } from "./Alert";
import moment from "moment";

export const newTransection =
  (transection, payment = false) =>
  async (dispatch) => {
    try {
      if (!payment) {
        transection.balance = transection.total - transection.paid;
      }

      const doc = await firestore.collection("transections").add(transection);

      dispatch({
        type: NEW_TRANSECTION,
        payload: { id: doc.id, ...transection },
      });

      dispatch(setAlert("success", "Transections added successfuly", 5000));
    } catch (error) {
      dispatch(setAlert("error", error.message, 5000));
    }
  };

export const getTransections = (customerId) => async (dispatch) => {
  try {
    const response = await firestore
      .collection("transections")
      .where("customerId", "==", customerId)
      .get();

    const transections = [];

    response.forEach((doc) => {
      transections.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch({
      type: GET_TRANSECTIONS,
      payload: transections,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTransections = () => async (dispatch) => {
  try {
    const startDate = moment().startOf("year").format("YYYY-MM-DD");
    const endDate = moment().endOf("year").format("YYYY-MM-DD");

    // get the transactions of current year range
    const response = await firestore
      .collection("transections")
      .where("date", ">=", startDate)
      .where("date", "<=", endDate)
      .where("transection", "==", true)
      .get();

    const transections = [];

    response.forEach((doc) => {
      transections.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const totalsByPetrol = [];
    const totalsByDiesel = [];
    const totalsBySupreme = [];

    months.forEach((month, index) => {
      // totalsByMonth.push(getTotalsByMonth(index, transections));
      totalsByPetrol.push(getTotalsByMonth(index, transections, "petrol"));
      totalsByDiesel.push(getTotalsByMonth(index, transections, "diesel"));
      totalsBySupreme.push(getTotalsByMonth(index, transections, "supreme"));
    });

    const totalsByMonth = {
      petrol: totalsByPetrol,
      diesel: totalsByDiesel,
      supreme: totalsBySupreme,
    };

    dispatch({
      type: TOTAL_TRANSECTION,
      payload: totalsByMonth,
    });
  } catch (error) {
    console.log(error);
  }
};

const getTotalsByMonth = (monthIndex, data, particular) => {
  const filteredByMonth = data.filter(
    (d) => moment(d.date).month() === monthIndex && d.particular === particular
  );

  let total = 0;

  filteredByMonth.forEach((record) => {
    total += record.total;
  });

  return total;
};

// Single record
export const singleTransection = (id) => async (dispatch) => {
  try {
    const response = await firestore.collection("transections").doc(id).get();

    dispatch({
      type: SINGLE_TRANSECTION,
      payload: {
        id: response.id,
        ...response.data(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
//Update transection
export const updateTransection = (id, data) => async (dispatch) => {
  try {
    await firestore.collection("transections").doc(id).set(data);

    dispatch(setAlert("success", "Transection updated successfully", 5000));
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteTransection = (id) => async (dispatch) => {
  try {
    const response = await firestore
      .collection("transections")
      .doc(id)
      .delete();

    dispatch({
      type: DELETE_TRANSECTION,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
