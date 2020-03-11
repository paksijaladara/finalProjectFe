import { combineReducers } from "redux";
import LoginRegister from "./LoginRegister";
import TransaksiReducers from "./transaksiReducers";

export default combineReducers({
  LoginRegister: LoginRegister,
  TransaksiReducers: TransaksiReducers
});
