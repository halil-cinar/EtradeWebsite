import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CartSummaryHorizontal extends Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-center flex-row">
          <div className="w-100 border">
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
               
              <Link to={{pathname:"/payment"}} >
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
  

export default connect(mapStateToProps)(CartSummaryHorizontal);