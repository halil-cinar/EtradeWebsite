import { ADD_PAYMENT_ADDRESS, ADD_PAYMENT_INFORMATION } from "../actions/actionTypes";
import initialState from "./initialState";

export default function paymentInformationReducer(
  state = initialState.paymentInformation,
  action
) {
  switch (action.type) {
    case ADD_PAYMENT_ADDRESS:
      return { ...state, address: action.payload };
      
    case ADD_PAYMENT_INFORMATION:
      return { ...state, paymentInformation: action.payload };

    default:
      return state;
  }
}
