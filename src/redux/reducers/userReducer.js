import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state=initialState.userInfo,action){
    switch (action.type) {
        case actionTypes.GET_USER_INFO_SUCCESS:
            console.log(action.payload)
            return {...action.payload[0]};
    
        default:
            return state;
    }
}