import {
  NEW_CUSTOMER,
  GET_CUSTOMERS,
  SINGLE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from "../actions/constants";

const initialState = {
  customers: [],
  customer: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, payload],
      };
    case GET_CUSTOMERS:
      return {
        customers: payload,
        loading: false,
      };
    case SINGLE_CUSTOMER:
      return { ...state, customer: payload, loading: false };

    case UPDATE_CUSTOMER:
      // find the index of the doc
      const index = state.customers.findIndex(
        (customer) => customer.id === payload.id
      );
      // remove the old one
      state.customers.splice(index, 1);

      return {
        ...state,
        customers: [...state.customers, payload],
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== payload
        ),
      };

    default:
      return state;
  }
}
