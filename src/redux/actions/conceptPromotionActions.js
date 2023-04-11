import * as actionTypes from "./actionTypes";
import * as productActions from "./productActions";
import * as brandActions from "./brandActions";

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

  export function addConceptPromotionSuccess(items){
      return {type:actionTypes.ADD_CONCEPT_PROMOTION_SUCCESS,payload:items}
  }

  export function getConceptPromotions(count){
    return function(dispatch){
        let url=urls.conceptPromotionsUrl
        if(count){

        }
        return fetch(url).then(handleResponse).then(list=>{
            list.map((item,index)=>{
              console.log(item)
                let productIds=item.productIds
                let productsUrl=urls.productsURL+"?id="+productIds.join("&id=")

                productActions.getProductsApi(productsUrl).then(products=>{
                   let newItem={...item,products}

                    brandActions.getBrandApiById(newItem.brandIds).then(brands=>{
                      let newItem2={...newItem,brands}
                      dispatch(addConceptPromotionSuccess([newItem2]))
                    })
                   
                })
            })
        })
    }
  }