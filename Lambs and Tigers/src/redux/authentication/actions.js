import firebase from "firebase";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "./actionTypes";
import { fbUserInfo } from "../../config/FireBase";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});

export const loginUser = payload => {
  const { email, password } = payload;
  const data = "";
  return dispatch => {
    dispatch(loginUserRequest());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("action res", res);
        fbUserInfo
          .doc(email)
          .set({
            displayName: "name",
            email,
            photoURL: "photoURL",
            createdTime: Date()
          })
          .then(ref => {
            // console.log('Added document with ID: ', ref.id);
          });
        dispatch(loginUserSuccess(res));
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      });
  };
};

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});

export const logoutUserRequest = () => ({
  type: LOGOUT_USER_REQUEST
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutUserRequest(firebase.currentUser));

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutUserSuccess());
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};

// export const logoutUser = payload => {
//   return dispatch => {
//     dispatch(logoutUserRequest());
//     return axios
//       .post(
//         "/logout",
//         {},
//         {
//           headers: {
//             Authorization: payload.token
//           }
//         }
//       )
//       .then(res => {
//         dispatch(logoutUserSuccess(res));
//       })
//       .catch(err => dispatch(logoutUserFailure(err.message)));
//   };
// };
