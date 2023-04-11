import * as actionTypes from "./actionTypes";
import urls from "../../Constant/urls";
export function getProductSuccess(list) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: list };
}
export function getProductByCategorySuccess(list) {
  return { type: actionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS, payload: list };
}


export function getSpecialProductsSuccess(list) {
  return { type: actionTypes.GET_SPECIAL_PRODUCT_SUCCESS, payload: list };
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

export function getProductsApi(url) {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getProductsByCategory(categoryID) {
  return function (dispatch) {
    let url =
      urls.productsURL + (categoryID ? "?categoryId=" + categoryID : "");
    getProductsApi(url)
      .then((data) => dispatch(getProductByCategorySuccess(data)))
      .catch(handleError);
  };
}
export function getProductBySubcategory(categoryID,subcategoryID){
  return function (dispatch) {
    let url =
      urls.productsURL + (categoryID ? "?categoryId=" + categoryID : "");

    getProductsApi(url)
      .then((data) => dispatch(getProductSuccess(data)))
      .catch(handleError);
  };
}

export function getSpecialProducts() {
  return function (dispatch) {
    let url = urls.specialProducts;
    getProductsApi(url)
      .then((data) => {
        
        let url = urls.productsURL+"?"+ data.map((item) => "id=" + item.productId).join("&");

        getProductsApi(url)
          .then((result) => dispatch(getSpecialProductsSuccess(result)))
          .catch(handleError);
      })
      .catch(handleError);
  };
}

function setCurrentProductSuccess(product){
  return {type:actionTypes.SET_CURRENT_PRODUCT,payload:product};
}

export function setCurrentProduct(productId){
  return function (dispatch){
    getProductsApi(urls.productsURL+"?id="+productId).then(result=>dispatch(setCurrentProductSuccess(result))).catch(handleError)

  }
}
