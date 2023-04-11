import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  let items = [];
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (addedItem) {
        addedItem.quantity += action.payload.quantity;
        return [...state];
      }
      return [...state, action.payload];

    case actionTypes.UPDATE_CART:
      items = [...state];
      
      return [
        ...items.map((item) => {
          if (item.product.id === action.payload.product.id) {
            return action.payload;
          }
          return item;
        }),
      ];

    case actionTypes.REMOVE_FROM_CART:
      items = [...state];
      let removedItem = items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (removedItem) {
        if (removedItem.quantity > 1) {
          removedItem.quantity -= 1;
        } else {
          items = [
            ...items.filter(
              (item) => item.product.id !== action.payload.product.id
            ),
          ];
        }
      }
      return [...items];

    default:
      return state;
  }
}
