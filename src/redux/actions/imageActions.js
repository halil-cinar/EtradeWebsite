import urls from "../../Constant/urls";
import {
  GET_IMG_SUCCESS,
  GET_NAVBAR_NOTIFICATION_SUCCESS,
} from "./actionTypes";

export function getImgSuccess(imgs) {
  return { type: GET_IMG_SUCCESS, payload: imgs };
}

export function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
}

export function handleError(error) {
  console.log(error.message);
}

export function getAllImg() {
  return function (dispatch) {
    let url = urls.imgURL ;
    return fetch(url).then(handleResponse).then(imgs=>getImgSuccess(imgs)).catch(handleError);
  };
}


export function getImgApi(imgID) {
    
      let url = urls.imgURL + "?id=" + imgID;
      return fetch(url).then(handleResponse).catch(handleError);
    
  }