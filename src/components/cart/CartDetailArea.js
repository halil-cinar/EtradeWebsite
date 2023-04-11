import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

import AddToCartButton from "../toolbox/AddToCartButton";
import CartItem from "./CartItem";

class CartDetailArea extends Component {
  state = {
    quantity: 1,
    checkedItems:[]
  };

  onChange = (name,value) => {
    this.setState({ [name]: value });
  };

  checkedOnChange=(item,checked)=>{
  
     if(checked===true){
       let checkedItems=[...this.state.checkedItems]
     let checkedItem= checkedItems.find(p=>p.product.id===item.product.id)
     if(checkedItem){
      checkedItem.quantity=item.quantity
     }else{
      item.checked=checked;
      checkedItems=[...checkedItems,item]
     }
        this.setState({checkedItems:checkedItems})
    }else{
      item.checked=false
      this.setState({checkedItems:[...this.state.checkedItems.filter(p=>p.product.id!==item.product.id)]}) 
    }
  }

  group =(arr)=> {
   let grouped= arr.reduce((acc, curr) => {
    const key = curr.dealer.id;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }
, {})
//Object.entries(grouped).map(item=>item[1])
return grouped
};
  
onCounterChange=()=>{
  
}


  renderEmpty() {
    return (
      <div style={{display:"grid",placeItems:"center",marginTop:"40px"}}>
        <div style={{display:"grid",placeItems:"center"}}>
        <i className="fas fa-shopping-cart" style={{fontSize:"90px"}}></i>
          <h5>Sepetiniz Şuan Boş</h5>
          <p>Sepetinizi dolduralım</p>
        </div>
      </div>
    );
  }

  render() {
    return !this.props.cart || this.props.cart.length == 0 ? (
      this.renderEmpty()
    ) : (
      <div className="container">

        <h3>Sepetim ({this.props.cart.length})</h3>
        
{Object.entries(this.group(this.props.cart)).map((item)=>
<div>
  {console.log(item)}
  <div  style={{backgroundColor:"lightgrey"}}> <h5 className="p-1 px-2 ps-4">{item[1][0].dealer.companyName} <Badge color="success">{item[1][0].dealer.ratingValue} </Badge> </h5></div>
  <div className=" p-1" >
    
     {item[1].map(item=>(
      <CartItem  checkedOnChange={this.checkedOnChange} item={item} />
     ))}
        
  </div>
</div>

)}
        



      
        
         
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    windowSize:state.windowReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetailArea);
