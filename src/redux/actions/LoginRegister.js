import {
  AUTH_LOADING,
  AUTH_REGISTER,
  AUTH_REGISTER_ERROR,
  AUTH_SYSTEM_ERROR,
  AUTH_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "./types";
import Axios from "axios";
import { API } from "../../API/index";

export const registerUser = ({ userName, password, email }) => {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    if (userName === "" || password === "" || email === "") {
      dispatch({ type: AUTH_REGISTER_ERROR, payload: "wajib di isi" });
    } else {
      Axios.post(`${API}/LoginRegister/registerusers`, {
        userName,
        password,
        email
      })
        .then(res => {
          console.log(res);
          if (res.data.status === "error register") {
            dispatch({ type: AUTH_REGISTER_ERROR, payload: res.data.message });
          } else {
            localStorage.setItem("userName", res.data.userName);
            dispatch({ type: AUTH_REGISTER, payload: res.data });
            window.location.reload();
          }
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: AUTH_SYSTEM_ERROR,
            payload: { error: "system error" }
          });
        });
    }
  };
};

export const loginAction = ({ userName, password }) => {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });

    Axios.get(`${API}/LoginRegister/login`, {
      params: {
        userName,
        password
      }
    }).then(res => {
      console.log(res.data);
      if (res.data.status !== "error") {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.result });
        localStorage.setItem("id", res.data.result.id);
      } else {
        dispatch({ type: AUTH_LOGIN_ERROR, payload: res.data.message });
      }
    });
  };
};

export const reLogin = res => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res });
  };
};

export const logOut = () => {
  return { type: USER_LOGOUT };
};

// import Axios from "axios";
// import { API } from "../../API";

// export const LoginSuccessAction = datauser => {
//   return {
//     type: "LOGIN_SUCCESS",
//     payload: datauser
//   };
// };

// export const LogoutSuccessAction = () => {
//   return {
//     type: "LOGOUT_SUCCESS"
//   };
// };

// export const CartAction = cart => {
//   return {
//     type: "NOTIF_CART",
//     payload: cart
//   };
// };

// export const ChangePassAction = newpass => {
//   return {
//     type: "RESET_PASS",
//     payload: newpass
//   };
// };

// export const Loginthunk = (userName, password) => {
//   return dispatch => {
//     dispatch({ type: "LOGIN_LOADING" });
//     Axios.get(`${API}users?userName=${userName}&password=${password}`)
//       .then(res => {
//         if (res.data.length) {
//           localStorage.setItem("kunci", res.data[0].id);
//           dispatch(LoginSuccessAction(res.data[0]));
//         } else {
//           dispatch({
//             type: "LOGIN_ERROR",
//             payload: "salah memasukan password"
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({ type: "LOGIN_ERROR", payload: "server error" });
//       });
//   };
// };

// export const Login_error = () => {
//   return dispatch => {
//     dispatch({ type: "LOGIN_ERROR", payload: "" });
//   };
// };
