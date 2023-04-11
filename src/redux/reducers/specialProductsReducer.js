import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function categoryReducer(state=initialState.specialProducts,action){
    switch (action.type) {
        case actionTypes.GET_SPECIAL_PRODUCT_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}