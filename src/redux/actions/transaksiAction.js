import {
  ADD_TRANSAKSI_ERROR,
  ADD_TRANSAKSI_LOADING,
  ADD_TRANSAKSI_SUCCESS,
  GET_CHART_ERROR,
  GET_CHART_LOADING,
  GET_CHART_SUCCESS,
  DELETE_CHART_ERROR,
  DELETE_CHART_LOADING
} from "./types";

import axios from "axios";
import { API } from "../../API";

export const addCart = data => {
  // get user id
  const id = localStorage.getItem("id");
  console.log("addCart", data);
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
  console.log("getcart");
  return dispatch => {
    dispatch({ type: GET_CHART_LOADING });
    axios
      .get(`${API}/transaksi/get-chart/${userid}`)
      .then(res => {
        console.log("getChart", res.data);
        dispatch({ type: GET_CHART_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: GET_CHART_ERROR }));
  };
};

export const deleteCart = data => {
  console.log(data);

  return dispatch => {
    dispatch({ type: DELETE_CHART_LOADING });
    axios
      .post(`${API}/transaksi/delete-cart/`, data)
      .then(res => {
        if (res.data.deleteStatus) {
          dispatch(getChart());
        }
        dispatch({ type: DELETE_CHART_ERROR });
      })
      .catch(err => console.log(err));
  };
};
