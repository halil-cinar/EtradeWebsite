import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function currentProductReducer(state=initialState.currentProduct,action){
    switch (action.type) {
        case actionTypes.SET_CURRENT_PRODUCT:
            return action.payload[0];
    
        default:
            return state;
    }
}