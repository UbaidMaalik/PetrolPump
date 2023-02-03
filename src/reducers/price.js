import {
  NEW_PRICE,
  GET_PRICES,
  UPDATE_PRICE,
  DELETE_PRICE,
  GET_CURRENT_PRICE,
} from "../actions/constants";

const initialState = {
  prices: [],
  current_price: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_PRICE:
      return {
        ...state,
        prices: [payload, ...state.prices],
      };
    case GET_PRICES:
      return {
        ...state,
        prices: payload.prices,
        current_price: payload.current_price,
        loading: false,
      };

    case GET_CURRENT_PRICE:
      return {
        ...state,
        current_price: payload,
      };

    case DELETE_PRICE:
      return {
        ...state,
        prices: state.prices.filter((price) => price.id !== payload),
      };

    default:
      return state;
  }
}
