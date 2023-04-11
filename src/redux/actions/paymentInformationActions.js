import { ADD_PAYMENT_ADDRESS, ADD_PAYMENT_INFORMATION } from "./actionTypes";


export function addPaymentAddress(address){
    return {type:ADD_PAYMENT_ADDRESS,payload:address}
}
export function addPaymentInformation(information){
    console.log(information)
    return {type:ADD_PAYMENT_INFORMATION,payload:information}
}