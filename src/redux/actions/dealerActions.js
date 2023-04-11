import urls from "../../Constant/urls"


function handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
  }
  
  function handleError(error) {
    throw error;
  }

export function getProductDealerApi(dealerId){
    let url=urls.dealerUrl+"?id="+dealerId;
    return fetch(url).then(handleResponse).catch(handleError)
}