import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import CartDetailArea from "../cart/CartDetailArea";
import OrderSummary from "../cart/OrderSummary";
import AddToCartButton from "../toolbox/AddToCartButton";

class CartPage extends Component {

    mdSize=960
  render() {
    return (
      <div>
        <div className="d-flex w-100" style={this.props.windowSize.width >this.mdSize?{flexDirection:"row",justifyContent:"space-between"}:{flexDirection:"column",justifyContent:"space-between"}}>
          <div style={this.props.windowSize.width>this.mdSize?{ flex: "5" }:{width:"100%"}}>
            <CartDetailArea />
          </div>
          <div style={this.props.windowSize.width>this.mdSize?{ flex: "2" }:{width:"100%"}}>
            <OrderSummary />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    windowSize: state.windowReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
