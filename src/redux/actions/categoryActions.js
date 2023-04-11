import * as actionTypes from "./actionTypes";
import urls from "../../Constant/urls";
export function getCategorySuccess(list) {
  return { type: actionTypes.GET_CATEGORY_SUCCESS, payload: list };
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const errorText = response.text();
  console.log(errorText);
  throw new Error(errorText);
}

function handleError(error) {
  console.log(error.message);
  throw error;
}

export function getCategories() {
  return function (dispatch) {
    fetch(urls.categoryURL)
      .then(handleResponse)
      .then((data) => dispatch(getCategorySuccess(data)))
      .catch(handleError);
  };
}
export function getProductCategories(categoryID) {
  return function (dispatch) {
    fetch(urls.subcategoryURL+(categoryID?"?categoryID="+categoryID:""))
      .then(handleResponse)
      .then((data) => dispatch(getCategorySuccess(data)))
      .catch(handleError);
  };
}
