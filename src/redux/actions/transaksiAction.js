import {
  ADD_TRANSAKSI_ERROR,
  ADD_TRANSAKSI_LOADING,
  ADD_TRANSAKSI_SUCCESS,
  GET_CHART_ERROR,
  GET_CHART_LOADING,
  GET_CHART_SUCCESS
} from "./types";

import axios from "axios";
import { API } from "../../API";

export const addCart = data => {
  // get user id
  const id = localStorage.getItem("id");
  console.log(data);
  return dispatch => {
    dispatch({ type: ADD_TRANSAKSI_LOADING });
    axios
      .post(`${API}/transaksi/add-chart`, { data, userid: id })
      .then(res => {
        dispatch({ type: ADD_TRANSAKSI_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: ADD_TRANSAKSI_ERROR }));
  };
};

export const getChart = () => {
  const userid = localStorage.getItem("id");
  return dispatch => {
    dispatch({ type: GET_CHART_LOADING });
    axios
      .post(`${API}/transaksi/get-chart`, { userid })
      .then(res => {
        console.log("getChart", res.data);
        dispatch({ type: GET_CHART_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: GET_CHART_ERROR }));
  };
};
