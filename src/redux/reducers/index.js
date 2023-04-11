import { combineReducers } from "redux";
import navbarNotificationReducer from "../reducers/navbarNotificationReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";
import imgReducer from "./imgReducer";
import bannerSlidesReducer from "./bannerSlidesReducer";
import specialProductsReducer from "./specialProductsReducer";
import userReducer from "./userReducer";
import windowReducer from "./windowReducer";
import currentProductReducer from "./currentProductReducer";
import publicUserInfoReducer from "./publicUserInfosReducer";
import cartReducer from "./cartReducer";
import conceptPromotionReducer from "./conceptPromotionReducer";
import paymentInformationReducer from "./paymentInformationReducer";
import listedProductReducer from "./listedProductsReducer";
const reducers = combineReducers({
  navbarNotificationReducer,
  categoryReducer,
  subcategoryReducer,
  imgReducer,
  bannerSlidesReducer,
  specialProductsReducer,
  userReducer,
  windowReducer,
  currentProductReducer,
  publicUserInfoReducer,
  cartReducer,
  conceptPromotionReducer,
  paymentInformationReducer,
  listedProductReducer,
});

export default reducers;
