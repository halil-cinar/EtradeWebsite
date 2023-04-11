import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function imgReducer(state=initialState.imgList,action){
    switch (action.type) {
        case actionTypes.GET_IMG_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}