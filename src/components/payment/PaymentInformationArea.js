import React, { Component } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import { Collapse, Input, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { addPaymentInformation } from "../../redux/actions/paymentInformationActions";
import { connect } from "react-redux";
class PaymentInformationArea extends Component {
  state = {
    number: "",
    expiryMouth:
      ((new Date().getMonth() + 1).toString().length < 2 ? "0" : "") +
      (new Date().getMonth() + 1),
    expiryYear: new Date().getFullYear(),
    cvc: "",
    name: "",
    focus: "",
    currentPaymentType: "cc",
  };

  handleInputChange = (event) => {
    let { name, value } = event.target;

    if (name === "number" && isNaN(String(value).charAt(value.length - 1))) {
      value = value.substring(0, value.length - 1);
    }

    this.setState({ [name]: value });
   setTimeout( this.updatePaymentInformation,70)
  
  };

  updatePaymentInformation = () => {
    const { cvc, name, expiryYear, expiryMouth, number } = this.state;
   // console.log()
    this.props.actions.addPaymentInformation({
      cvc,
      name,
      expiryMouth,
      expiryYear,
      number,
    });
  };

  handleInputFocus = (event) => {
    const { name } = event.target;
    this.setState({ focus: name });
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem className="border">
            <div
              style={{ cursor: "pointer", marginLeft: "0px" }}
              onClick={() => {
                this.setState({
                  currentPaymentType:
                    this.state.currentPaymentType === "cc" ? "" : "cc",
                });
              }}
            >
              <h3>
                <strong>Kart ile ödeme</strong>
              </h3>
            </div>

            <Collapse isOpen={this.state.currentPaymentType === "cc"}>
              <div className="d-flex justify-content-center flex-wrap">
                <div>
                  <Cards
                    number={this.state.number}
                    expiry={this.state.expiryMouth + this.state.expiryYear}
                    cvc={this.state.cvc}
                    name={this.state.name}
                    focused={this.state.focus}
                    placeholders={{ name: "Kart üzerindeki isim" }}
                  />
                </div>

                <div style={{ flex: "1 2 300px", maxWidth: "450px" }}>
                  <form className=" ms-4">
                    <label>Kart Numarası:</label>
                    <Input
                      maxLength="19"
                      type="text"
                      name="number"
                      placeholder="Card Number"
                      value={this.state.number}
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="w-100"
                    ></Input>
                    <label>Kartın üzerindeki isim:</label>
                    <Input
                      type="name"
                      name="name"
                      placeholder="Card Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="w-100"
                    ></Input>
                    <label>Kart Son geçerlilik:</label>
                    <span className="w-100 d-flex">
                      <Input
                        type="select"
                        name="expiryMouth"
                        maxLength="5"
                        placeholder="Card expiry"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        onLoad={this.handleInputChange}
                      >
                        {[...Array(12).keys()].map((item) => {
                          item += 1;
                          if (String(item).length < 2) {
                            item = "0" + item;
                          }

                          return (
                            <option
                              selected={
                                new Date().getMonth() + 1 == Number(item)
                              }
                              key={"ccExpiryM" + item}
                            >
                              {item}{" "}
                            </option>
                          );
                        })}
                      </Input>
                      <Input
                        type="select"
                        name="expiryYear"
                        maxLength="5"
                        placeholder="Card expiry"
                        onLoad={this.handleInputChange}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      >
                        {[...Array(30).keys()].map((item) => {
                          item += new Date().getFullYear();

                          return (
                            <option key={"ccExpiryY" + item} value={item}>
                              {item}{" "}
                            </option>
                          );
                        })}
                      </Input>
                    </span>

                    <label>Kart cvc Numarası:</label>
                    <Input
                      type="text"
                      maxLength="3"
                      name="cvc"
                      placeholder="Card cvc"
                      value={this.state.cvc}
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      className="w-100"
                    ></Input>
                  </form>
                </div>
              </div>
            </Collapse>
          </ListGroupItem>
          <ListGroupItem>
            <div
              style={{ cursor: "pointer", marginLeft: "20px" }}
              onClick={() => {
                this.setState({
                  currentPaymentType:
                    this.state.currentPaymentType === "cc-type-2"
                      ? ""
                      : "cc-type-2",
                });
              }}
            >
              <h3>
                <strong>Kredi kartı ile ödeme</strong>
              </h3>
            </div>

            <Collapse isOpen={this.state.currentPaymentType === "cc-type-2"}>
              fffggffg
            </Collapse>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPaymentInformation: bindActionCreators(
        addPaymentInformation,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentInformationArea);
