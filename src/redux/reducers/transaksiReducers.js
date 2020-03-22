import {
  ADD_TRANSAKSI_SUCCESS,
  ADD_TRANSAKSI_ERROR,
  ADD_TRANSAKSI_LOADING,
  GET_CHART_ERROR,
  GET_CHART_LOADING,
  GET_CHART_SUCCESS,
  DELETE_CHART_ERROR,
  DELETE_CHART_LOADING
} from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  addCart: false,
  dataCart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSAKSI_SUCCESS:
      return { ...state, addCart: true, dataCart: action.payload };
    case ADD_TRANSAKSI_LOADING:
      return { ...state, loading: true };
    case ADD_TRANSAKSI_ERROR:
      return { ...state, error: true };
    case GET_CHART_SUCCESS:
      return { ...state, dataCart: action.payload };
    case GET_CHART_LOADING:
      return { ...state, loading: true };
    case GET_CHART_ERROR:
      return { ...state, error: true };
    // case DELETE_CHART_SUCCESS:
    //   return { ...state, dataCart: action.payload };
    case DELETE_CHART_LOADING:
      return { ...state, loading: true };
    case DELETE_CHART_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
