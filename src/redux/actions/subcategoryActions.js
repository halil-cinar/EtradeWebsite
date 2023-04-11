import urls from "../../Constant/urls";
import { GET_SUBCATEGORY_SUCCESS } from "./actionTypes";

export function getSubcategorySuccess(categories) {
  return { type: GET_SUBCATEGORY_SUCCESS, payload: categories };
}

function handleResponse(response){
    if(response.ok){
        return response.json()
    }

    console.log(response.text())
}

function handleError(error){
    console.log(error)
}
 
export function getSubcategoryApi(categoryId) {
  let url = urls.subcategoryURL;
  if (categoryId) {
    url += "?categoryId=" + categoryId;
  }

  return fetch(url)
    .then(handleResponse).catch(handleError)
}

export function getSubcategory(categoryId) {
  return function (dispatch) {
   
    getSubcategoryApi(categoryId)
      .then((data) => dispatch(getSubcategorySuccess(data)))
      .catch(handleError);
  };
}
