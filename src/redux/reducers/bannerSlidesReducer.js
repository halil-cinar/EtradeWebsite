import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function bannerSlidesReducer(state=initialState.bannerSlides,action){
    switch (action.type) {
        case actionTypes.GET_MAIN_BANNER_SLIDES_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}