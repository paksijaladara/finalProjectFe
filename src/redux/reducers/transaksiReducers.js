import {
  ADD_TRANSAKSI_SUCCESS,
  ADD_TRANSAKSI_ERROR,
  ADD_TRANSAKSI_LOADING,
  GET_CHART_ERROR,
  GET_CHART_LOADING,
  GET_CHART_SUCCESS
} from "../actions/types";

const initialState = {
  loading: false,
  error: false,
  addChart: false,
  dataCart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSAKSI_SUCCESS:
      return { ...state, addChart: true };
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
    default:
      return state;
  }
};
