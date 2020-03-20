import {LOGIN_SUCCESS, LOGIN_FAIL} from './action'
const initialState={
    data:[],
    LoggedIn:false,
    token:"",
    Error:""
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            let copystate={...state}
            copystate.LoggedIn=true
            copystate.token=action.payload
            return copystate

        case LOGIN_FAIL:
            let copystate2={...state}
            copystate2.LoggedIn=false
            copystate2.error=action.payload
            return copystate2

        default:
            return state;
    }
}