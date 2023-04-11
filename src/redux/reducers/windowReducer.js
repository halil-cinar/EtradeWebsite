import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function windowReducer(state=initialState.windowSize,action){
    switch (action.type) {
        case actionTypes.UPDATE_WINDOW_SIZE:
            return action.payload;
    
        default:
            return state;
    }
}