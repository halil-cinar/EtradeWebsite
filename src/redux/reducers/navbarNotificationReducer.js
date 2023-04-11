import { GET_NAVBAR_NOTIFICATION_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function navbarNotificationReducer(
  state = initialState.navbarNotification,
  action
) {

  switch (action.type) {
    case GET_NAVBAR_NOTIFICATION_SUCCESS:
      
      return action.payload;

    default:
      return state;
  }
}
