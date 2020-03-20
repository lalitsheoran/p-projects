import axios from "axios";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const BOOK = "BOOK";
export const LOGIN_REQUEST="LOGIN_REQUEST"

export const loginSuccess=(value)=>({
    type:LOGIN_SUCCESS,
    payload:value
})
export const loginFail=(value)=>({
    type:LOGIN_FAIL,
    payload:value
})
export const loginRequest=(value)=>({
    type:LOGIN_REQUEST,
    payload:value
})

export const login = (value) => {
    console.log("log in", value);
    return dispatch => {
      console.log("dispatching axios..");
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=utf-8' },
        data: value,
        url:'http://localhost:8080/auth/login',
      };
      console.log("did u see me")
      return axios(options)
        .post(`http://localhost:8080/auth/login`,
        value)
        .then(res => {
          console.log("login success", res.data);
          return dispatch(loginSuccess(res.data));
        })
        .catch(err => dispatch(loginFail(err)));
    };
  };
  