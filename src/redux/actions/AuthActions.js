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
