import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function publicUserInfoReducer(state=initialState.publicUserInfos,action){
    switch (action.type) {
        case actionTypes.GET_PUBLIC_USER_INFOS_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}