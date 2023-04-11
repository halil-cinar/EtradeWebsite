import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function conceptPromotionReducer(state=initialState.conceptPromotions,action){

    switch (action.type) {
        
        case actionTypes.ADD_CONCEPT_PROMOTION_SUCCESS:
            let newState=[...state]
            action.payload.map(element => {
                let addedItem=newState.find(item=>item.id===element.id)
                if(!addedItem){
                    console.log(element)
                    newState=[element,...newState]
                }
            })
            return newState.sort((a,b)=>a.id-b.id);
            
            
            

        default:
           return state
    }

}