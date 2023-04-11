import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class OrderSummary extends Component {
  total = 0;
  state = {
    totalPrice: 0,
  };
  getTotalPrice = (cart) => {
    let total = cart
      .filter((item) => item.checked == true)
      .map((item) => [item.product.unitPrice, item.quantity])
      .reduce((acc, item) => acc + item[0] * item[1], 0);
    this.setState({ totalPrice: total });
    return total;
  };

  componentDidMount() {
    this.getTotalPrice(this.props.cart);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.getTotalPrice(this.props.cart);
    }
  }

  render() {
    return (
      <div style={{display:this.state.totalPrice>0? "block":"none"}}>
        <div className="d-flex align-items-center flex-column">
          <div className="w-75 border">
            <h5>Şipariş Özeti</h5>
            {this.props.cart.filter(item=>item.checked==true).map((item) => (
              <div
                key={item.product.id}
                className="d-flex justify-content-between align-items-center"
              >
                <span>
                  {item.product.productName + " (" + item.quantity + "adet)"}
                </span>{" "}
                <span>
                  {Number(item.product.unitPrice * item.quantity) +
                    item.product.currency}
                </span>
              </div>
            ))}
            <hr style={{ width: "95%", margin: "15px auto" }}></hr>

            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <span>
                <h5>
                  <strong>Toplam Tutar : </strong>
                </h5>
              </span>
              <span>
                <h5>
                  <strong>
                    {this.state.totalPrice}
                    {"TL"}
                  </strong>
                </h5>
              </span>
            </div>
          </div>
          <div className="w-75">
            {this.state.totalPrice > 0 && (
                <Link className="btn btn-success w-100" to={{pathname:"/payment"}} >
                Alişverişi Tamamla
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(OrderSummary);
