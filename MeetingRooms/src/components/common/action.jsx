import axios from "axios";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const BOOK = "BOOK";
export const LOGIN_REQUEST="LOGIN_REQUEST"
export const CONFIRM="CONFIRM"

export const loginSuccess=()=>({
    type:LOGIN_SUCCESS,
})
export const logoutSuccess=()=>({
  type:LOGOUT_SUCCESS,
})
export const confirm=(value)=>({
  type:CONFIRM,
  payload:value
})

