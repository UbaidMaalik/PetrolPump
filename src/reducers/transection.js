import {
  DELETE_TRANSECTION,
  GET_TRANSECTIONS,
  NEW_TRANSECTION,
  SINGLE_TRANSECTION,
  UPDATE_TRANSECTION,
  TOTAL_TRANSECTION,
} from "../actions/constants";

const initialState = {
  transections: [],
  total_transections: "",
  transection: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NEW_TRANSECTION:
      return {
        ...state,
        transections: [payload, ...state.transections],
      };
    case GET_TRANSECTIONS:
      return {
        transections: payload,
        loading: false,
      };
    case SINGLE_TRANSECTION:
      return { ...state, transection: payload, loading: false };

    case UPDATE_TRANSECTION:
      // find the index of the doc
      const index = state.transections.findIndex(
        (transection) => transection.id === payload.id
      );
      // remove the old one
      state.transections.splice(index, 1);

      return {
        ...state,
        transections: [...state.transections, payload],
      };
    case DELETE_TRANSECTION:
      return {
        ...state,
        transections: state.transections.filter(
          (transection) => transection.id !== payload
        ),
      };
    case TOTAL_TRANSECTION:
      return {
        ...state,
        total_transections: payload,
        loading: false,
      };
    default:
      return state;
  }
}
