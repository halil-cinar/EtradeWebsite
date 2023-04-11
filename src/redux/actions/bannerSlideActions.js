import { GET_MAIN_BANNER_SLIDES_SUCCESS } from "./actionTypes";
import urls from "../../Constant/urls";

export function getBannerSlidesSuccess(slides) {
    
  return { type: GET_MAIN_BANNER_SLIDES_SUCCESS, payload: slides };
}

function handlerResponse(response) {
  if (response.ok) {
    return response.json();
  }

  throw Error(response.text());
}

function handlerError(error) {
  throw error;
}

export function getBannerSlides() {
    return function (dispatch) {
        let url = urls.bannerSlidesUrl
        
   return fetch(url)
      .then(handlerResponse)    
      .then((result) => dispatch(getBannerSlidesSuccess(result)))
      .catch(handlerError);
  };
}
