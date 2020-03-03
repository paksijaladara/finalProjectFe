import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  AUTH_LOADING,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER,
  AUTH_REGISTER_ERROR,
  AUTH_SYSTEM_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  id: "",
  userName: "",
  password: "",
  email: "",
  status: "",
  token: "",
  loginerror: "",
  error: "",
  loading: false,
  statusregister: false,
  loginstatus: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...INITIAL_STATE, ...action.payload, loginstatus: true };
    case USER_LOGOUT:
      return { ...INITIAL_STATE };
    case AUTH_LOADING:
      return { ...state, error: "", loading: true };
    case AUTH_SYSTEM_ERROR:
      return { ...INITIAL_STATE, ...action.payload, statusregister: true };
    case AUTH_REGISTER:
      return { ...INITIAL_STATE, ...action.payload, statusregister: true };
    case AUTH_REGISTER_ERROR:
      return { ...INITIAL_STATE, error: action.payload };
    case AUTH_LOGIN_ERROR:
      return { ...INITIAL_STATE, loginerror: action.payload };

    default:
      return state;
  }
};
