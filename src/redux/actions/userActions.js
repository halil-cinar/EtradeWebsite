import * as actionTypes from "./actionTypes";
import urls from "../../Constant/urls";
export function getUserInfoSuccess(info) {
  return { type: actionTypes.GET_USER_INFO_SUCCESS, payload: info };
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
}

function handleError(error) {
  throw error;
}

export function getUserInfo(userId) {
  return function (dispatch) {
    let url = urls.userInfoUrl + "?userId=" + userId;
    return fetch(url)
      .then(handleResponse)
      .then((data) => dispatch(getUserInfoSuccess(data)))
      .catch(handleError);
  };
}

function updateUserApi(userInfo,dispatch) {
  let url = urls.userInfoUrl + "/" + userInfo.id;
  return fetch(url, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userInfo),
  })
    .then(handleResponse).then(()=>{dispatch&&dispatch(getUserInfoSuccess([{...userInfo}]))})
    .catch(handleError);
}

export function updateFavorites(userInfo) {
  return function (dispatch) {
    return updateUserApi(userInfo);
  };
}

export function getPublicUserInfoSuccess(infos) {
  return { type: actionTypes.GET_PUBLIC_USER_INFOS_SUCCESS, payload: infos };
}

export function getPublicUserInfo(userIds) {
  return function (dispatch) {
    let url = urls.publicUserInfoUrl + "?id=" + userIds.join("&id=");

    return fetch(url)
      .then(handleResponse)
      .then((data) => dispatch(getPublicUserInfoSuccess(data)))
      .catch(handleError);
  };
}

export function addToFavorites(product, userInfo) {
  return function (dispatch) {
    let newUserInfo = { ...userInfo };
    newUserInfo.favoriteList.productIds = [
      ...newUserInfo.favoriteList.productIds,
      product.id,
    ];
    updateUserApi(newUserInfo);
  };
}

export function removeFromFavorites(product, userInfo) {
  return function (dispatch) {
    let newUserInfo = { ...userInfo };
    newUserInfo.favoriteList.productIds =
      newUserInfo.favoriteList.productIds.filter((p) => p !== product.id);
    updateUserApi(newUserInfo);
  };
}

export function addToAddressList(address, userInfo) {
  return function (dispatch) {
    let newUserInfo = { ...userInfo };
    newUserInfo.addressList = [address, ...newUserInfo.addressList];
    updateUserApi(newUserInfo,dispatch);
  };
}

export function changeCurrentAddress(addressId, userInfo) {
  return function (dispatch) {
    let newUserInfo = { ...userInfo };
    newUserInfo.addressList = [
      newUserInfo.addressList.find((item) => item.id === addressId),
      ...newUserInfo.addressList.filter((item) => item.id !== addressId),
    ];
    updateUserApi(newUserInfo,dispatch);
  };
}
export function removeFromAddressList(addressId, userInfo) {
  return function (dispatch) {
    let newUserInfo = { ...userInfo };
    newUserInfo.addressList = [
      ...newUserInfo.addressList.filter((item) => item.id !== addressId),
    ];
    updateUserApi(newUserInfo);
  };
}
