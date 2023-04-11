import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function favoriteReducer(state=initialState.favoriteList,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCT_ADDED_TO_FAVORITES_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}