import urls from "../../Constant/urls";
import { GET_PRODUCT_ADDED_TO_FAVORITES_SUCCESS } from "./actionTypes";

export function getProductsAddedFavoritesSuccess(list) {
  return { type: GET_PRODUCT_ADDED_TO_FAVORITES_SUCCESS, payload: list };
}



function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
}

function handleError(error) {
  throw error;
}

export function getProductsAddedFavorites(userId) {
  return function (dispatch) {
    let url = urls.favoriteListUrl + "?userId=" + userId;
    return fetch(url)
      .then(handleResponse)
      .then((result) => dispatch(getProductsAddedFavoritesSuccess(result)))
      .catch(handleError);
  };
}

