import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class CartSummary extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "block", alignItems: "center" }}>
        <div style={{display:"block"}}>
          <i
            className="fa fa-shopping-cart"
            style={{ color: "white", fontSize: "24px" }}
          ></i>
         
            <span className="badge" style={{
                fontSize:"12px",
                color: "#fff",
                background: "green",
                borderRadius:"50%",
                padding:" 2px 7px",
                position:"relative",
                left:"-10px",
                top:"-14px",
                opacity:"0.9",
            }}>{this.props.cart&&this.props.cart.length}</span>
         
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart:state.cartReducer
  }
}

export default connect(mapStateToProps)(CartSummary);
