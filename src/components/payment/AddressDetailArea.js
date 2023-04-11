import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import AddAddressArea from "./AddAddressArea";
import { bindActionCreators } from "redux";
import { addPaymentAddress } from "../../redux/actions/paymentInformationActions";
import { changeCurrentAddress } from "../../redux/actions/userActions";

class AddressDetailArea extends Component {
  state = {
    addAddressAreaIsOpen: false,
    currentAddress: this.props.userData?this.props.userData.addressList[0]: {},
    billingAddressCheck: true,
    currentBillingAddress: this.props.userData?this.props.userData.addressList[0]: {},
  };

  onChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });

    if(name==="billingAddressCheck"){
      if(checked){
        this.setState({currentBillingAddress:this.state.currentAddress})
        this.props.actions.addPaymentAddress({
          deliveryAddress: this.state.currentAddress,
          billingAddress:  this.state.currentAddress, 
        });
      }
    }
  };

  componentDidUpdate(prevState,prevProps){
    
  }

  componentDidMount(){
    this.props.actions.addPaymentAddress({
      deliveryAddress: this.state.currentAddress,
      billingAddress: this.state.billingAddressCheck
        ? this.state.currentAddress
        : this.state.currentBillingAddress,
    });
  }

currentAddressOnChange=(event,address)=>{
  const { name, checked } = event.target;

    if (checked) {
      this.setState({ [name]: address });
      this.props.actions.addPaymentAddress({
        deliveryAddress: this.state.currentAddress,
        billingAddress: this.state.billingAddressCheck
          ? this.state.currentAddress
          : this.state.currentBillingAddress,
      });
}
};
  currentDeliveryAddressOnChange = (event, address) => {
    this.currentAddressOnChange(event,address)
      this.props.actions.changeCurrentAddress(address.id,this.props.userData)
    
  };
  currentBillingAddressOnChange = (event, address) => {
   this.currentAddressOnChange(event,address)     
    
  };

  render() {
    return (
      <div>
        <div className="border">
          <div className="d-flex justify-content-between">
            <h3>Teslimat Adresleri</h3>
            <div hidden>
            <Input
                type="checkbox"
                name="billingAddressCheck"
                onClick={this.onChange}
                checked={this.state.billingAddressCheck}
              
              />
              <label>Faturamıda aynı adrese gönder</label>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <Button
              className="border btn"
              onClick={() => {
                this.setState({
                  addAddressAreaIsOpen: !this.state.addAddressAreaIsOpen,
                });
              }}
              style={{
                flex: "1 1 300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "1%",
                backgroundColor: "lightgray",
              }}
            >
              <i className="fas fa-plus" />
              Yeni Adres Ekle
            </Button>

            <AddAddressArea isOpen={this.state.addAddressAreaIsOpen} />

            {this.props.userData.addressList.map((item, index) => (
              <div
              className=" border"
name="currentAddress"
onClick={(event) =>{
  event={...event,target:{...event.target,name:"currentAddress",checked:true}}
  this.currentDeliveryAddressOnChange(event, item)}
}
                key={"addressItem" + index}
                style={{ flex: "1 1 300px", margin: "1%" , height:"auto" }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <Input
                      type="radio"
                      checked={index === 0}
                      name="currentAddress"
                      onChange={(event) =>
                        this.currentDeliveryAddressOnChange(event, item)
                      }
                    />
                    {item.title}
                  </div>
                  <div>
                    <Link>Düzenle</Link>
                  </div>
                </div>
                <div
                  className="border h-100"
                  style={{ backgroundColor: "lightgray"}}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <i className="fas fa-user" />{" "}
                      {item.name + " " + item.surname}
                    </div>
                    <div>
                      <i className="fas fa-mobile-alt" /> {item.phoneNumber}
                    </div>
                  </div>
                  <div>{item.address}</div>
                  <div>
                    {item.district + "/" + item.city + "/" + item.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div hidden>---------------------------------------------------------------------</div>
        <div
          style={{
            display: !this.state.billingAddressCheck ? "block" : "none",
          }}
          className="border"
        >
          <div className="d-flex justify-content-between">
            <h3>Fatura Adresleri</h3>
            <div >
            <Input
                type="checkbox"
                name="billingAddressCheck"
                onClick={this.onChange}
                checked={this.state.billingAddressCheck}
              
              />
              <label>Faturamıda aynı adrese gönder</label>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {this.props.userData.addressList.map((item, index) => (
              <div
              className="h-100 border"
              name="currentBillingAddress"
onClick={(event) =>{
  event={...event,target:{...event.target,name:"currentBillingAddress",checked:true}}
  this.currentBillingAddressOnChange(event, item)}}
                key={"billingAddressItem" + index}
                style={{ flex: "1 1 300px", margin: "1%", }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <Input
                      type="radio"
                      name="currentBillingAddress"
                      
                      checked={this.state.currentBillingAddress.id===item.id}
                      onChange={(event) =>
                        this.currentBillingAddressOnChange(event, item)
                      }

                    />
                    {item.title}
                  </div>
                  <div>
                    <Link>Düzenle</Link>
                  </div>
                </div>
                <div
                  className="border h-100"
                  style={{ backgroundColor: "lightgray" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <i className="fas fa-user" />{" "}
                      {item.name + " " + item.surname}
                    </div>
                    <div>
                      <i className="fas fa-mobile-alt" /> {item.phoneNumber}
                    </div>
                  </div>
                  <div>{item.address}</div>
                  <div>
                    {item.district + "/" + item.city + "/" + item.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      addPaymentAddress: bindActionCreators(addPaymentAddress, dispatch),
      changeCurrentAddress:bindActionCreators(changeCurrentAddress,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetailArea);
