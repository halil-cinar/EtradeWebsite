import urls from "../../Constant/urls";
import { GET_NAVBAR_NOTIFICATION_SUCCESS } from "./actionTypes";

export function getNotificationSuccess(notification) {
  return { type: GET_NAVBAR_NOTIFICATION_SUCCESS, payload: notification };
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return {};
}
function handleError(error) {
  console.log(error.message);
}

export function getNotification() {
  return function (dispatch) {
    return fetch(urls.navbarNotificationURL)
      .then(handleResponse)
      .then((data) => dispatch(getNotificationSuccess(data)))
      .catch(handleError);
  };
}
