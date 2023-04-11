import { GET_PRODUCT_BY_CATEGORY_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState"

export default function listedProductReducer(state=initialState.listedProducts,action){

    switch (action.type) {
        case GET_PRODUCT_BY_CATEGORY_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }

}