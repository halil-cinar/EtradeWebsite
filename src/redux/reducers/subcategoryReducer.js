import { GET_SUBCATEGORY_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";


export default function subcategoryReducer(state=initialState.subcategories,action){
    switch (action.type) {
        case GET_SUBCATEGORY_SUCCESS:
            
            return action.payload;
    
        default:
            return state;
    }
}