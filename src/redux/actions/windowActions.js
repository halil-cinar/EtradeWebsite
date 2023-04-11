import { UPDATE_WINDOW_SIZE } from "./actionTypes";
import { updateFavorites } from "./userActions";


export function updateWindowSize(width,height){
    return {type:UPDATE_WINDOW_SIZE,payload:{width,height}}
}