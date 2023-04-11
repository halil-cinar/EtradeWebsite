import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, Table } from "reactstrap";
import {alertify} from "alertifyjs"
//props
//center:Bool

class PaymentSummary extends Component {
  onSubmitEvent = (event) => {
    event.preventDefault();
    console.log(this.props.paymentInformation)
    this.controlInformations()
  };


  controlInformations=()=>{
    let {address,paymentInformation} = this.props.paymentInformation
    

    if(address){
     let {billingAddress,deliveryAddress} = address
     if(billingAddress){
      
     }
    }
  }


  render() {
    return (
      <form
        onSubmit={(event) => this.onSubmitEvent(event)}
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className=" p-3"
          style={{ width: this.props.center ? "90%" : "100%", margin: "auto" }}
        >
          <h4>Ödenecek Tutar</h4>
          <h1>
            {this.props.cart &&
              this.props.cart.length > 0 &&
              this.props.cart
                .map((item) =>
                  item.product.unitPrice * item.quantity +Number(
                  Number.isInteger(item.product.freightRate)
                    ? item.product.freightRate
                    : 0)
                )
                .reduce((acc, item) => (acc += item))
                .toFixed(2) + this.props.cart[0].product.currency}
          </h1>

          <div className="mb-3">
            <Input
              style={{ padding: "10px" }}
              className="mx-1"
              type="checkbox"

              required
            />
            <small>
              <Link>Ön bilgilendirme formunu </Link> ve{" "}
              <Link>Mesafeli Satiş Sözlesmesini</Link> okudum onaylıyorum
            </small>
          </div>

          <Button type="submit" className="w-100 mb-4">
            Ödemeyi Onayla
          </Button>

          <small className=" text-center ">
            <Table className="">
              <tr>
                <th>Kargo</th>
                <td>
                  {this.props.cart &&
                    this.props.cart.length > 0 &&
                    this.props.cart
                      .map((item) =>
                        Number.isInteger(item.product.freightRate)
                          ? item.product.freightRate
                          : 0
                      )
                      .reduce((acc, item) => acc + item)
                      .toFixed(2) + this.props.cart[0].product.currency}
                </td>
              </tr>
              <tr>
                <th>Ürünler</th>
                <td> {this.props.cart &&
              this.props.cart.length > 0 &&
              this.props.cart
                .map((item) =>
                  item.product.unitPrice * item.quantity
                )
                .reduce((acc, item) => (acc += item))
                .toFixed(2) + this.props.cart[0].product.currency}</td>
              </tr>
            </Table>
          </small>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
    paymentInformation:state.paymentInformationReducer
  };
}

export default connect(mapStateToProps)(PaymentSummary);
