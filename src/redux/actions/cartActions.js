import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./actionTypes";


export function addToCart({product,deliveryOption,quantity,dealer,checked,...args}){
    return {type:ADD_TO_CART,payload:{product,deliveryOption,quantity,dealer,checked,...args}}
}
export function updateCart({product,deliveryOption,quantity,dealer,checked,...args}){
    return {type:UPDATE_CART,payload:{product,deliveryOption,quantity,dealer,checked,...args}}
}
export function removeFromCart({cartItem}){
    return {type:REMOVE_FROM_CART,payload:cartItem}
}
