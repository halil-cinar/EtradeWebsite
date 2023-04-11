import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function categoryReducer(state=initialState.categoryList,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}