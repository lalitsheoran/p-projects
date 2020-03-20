import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: true,
  error: false,
  userInfo: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case LOGIN_USER_SUCCESS:
      const { displayName, photoURL, email } = action.payload;
      return {
        ...state,
        userInfo: {
          displayName,
          photoURL,
          email,
          playDetails: []
        },
        isLoading: false,
        isAuth: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuth: false
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
