import React, { Component } from "react";
import Counter from "../toolbox/Counter";
import { Input } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart, removeFromCart, updateCart } from "../../redux/actions/cartActions";
class CartItem extends Component {
  state = {
    quantity: this.props.item.quantity,
     checked:this.props.item.checked

  };
  componentDidMount(){
    
  }

  componentDidUpdate(prevProps, prevState) {}

  checkedOnChange = (checked) => {
    //this.props.checkedOnChange(this.props.item, checked);
    let item={...this.props.item}
    item.checked=checked
    this.setState({checked})
    console.log(item)
    console.log(checked)
    this.props.actions.updateCart({...item})
  };

  counterOnChange = (count) => {
    let item = { ...this.props.item };
    this.setState({quantity:count})

    if (item.quantity < count) {
      //addToCart
      item.quantity = count;
      this.props.actions.updateCart({ ...item });
      console.log(item);
    } else if (item.quantity > count) {
      //removeFromCart
      this.props.actions.removeFromCart({cartItem:item})

    }
  };

  render() {
    return (
      <div className="border px-2 py-1 w-100 d-flex justify-content-between align-items-center" style={{flexWrap:"wrap"}}>
        <div className="d-flex align-items-center justify-content-around  "style={{flexWrap:"wrap"}} >
          <div className="mx-2">
            <Input
           
            checked={this.props.item.checked}
              onChange={(event) => this.checkedOnChange(event.target.checked)}
              style={{ padding: "13px" }}
              type="checkbox"
              
              
            />
          </div> 
          
          <div className="mx-2">
            <img width="70px" src={this.props.item.product.imgURLs[0]} />
          </div>
          <div className="mx-2">
            <div style={{wordWrap:"break-word"}}>{this.props.item.product.title} </div>
            <div>
              <Counter
              minValue="0"
                size="sm"
                firstValue={this.props.item.quantity}
                onChange={(count) => this.counterOnChange(count)}
              />
            </div>
          </div>
       </div>
        <div>
          <h6>
            {this.props.item.deliveryOption &&
              this.props.item.deliveryOption.deliveryCompanyName + " : "}
            {this.props.item.deliveryOption &&
              (this.props.item.deliveryOption.frightRate || "Ücretsiz kargo")}
          </h6>
        </div>
        <div className="d-flex flex-column p-0 " style={{}}>
          <small><del>{this.props.item.product.oldPrice&&((this.props.item.product.oldPrice*this.state.quantity)+this.props.item.product.currency)}</del></small>
          <strong>{(this.props.item.product.unitPrice*this.state.quantity)+this.props.item.product.currency}</strong>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(addToCart, dispatch),
      updateCart: bindActionCreators(updateCart, dispatch),
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
      
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
