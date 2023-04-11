import urls from "../../Constant/urls";

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

export function getBrandApiById(ids){
    
    let url=urls.brandUrl+"?id="+ids.join("&id=")

    return fetch(url).then(handleResponse).catch(handleError)
    
}