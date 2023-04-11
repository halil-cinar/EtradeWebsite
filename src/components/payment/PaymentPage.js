import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";
import AddressDetailArea from "./AddressDetailArea";
import PaymentInformationArea from "./PaymentInformationArea";
import PaymentSummary from "./PaymentSummary";

class PaymentPage extends Component {
  state = {
    activeTabId: "address",
    md:false
    
  };

mdSize=960
  componentDidMount(){
    this.setState({md:this.props.windowSize.width<this.mdSize});
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.windowSize.width!==this.props.windowSize.width){
      this.setState({md:this.props.windowSize.width<this.mdSize});
    }
  }

  changeActiveTab=(id)=>{
    this.setState({activeTabId:id})
  }

  render() {
    return (
      <div className=" d-flex align-items-top justify-content-around " style={{flexWrap:"wrap"}}>
        <div
          className="d-flex justify-content-around "
          style={!this.state.md?{flex:"3"}:{width:"100%"}}
        >
          <div style={{ flex: "1" }}>
            <Nav pills tabs style={{ display: "flex" }}>
              <NavItem 
              onClick={()=>this.changeActiveTab("address")}
              className="btn" style={{ flex: "1 1 300px" }}>
                <div className="border ">
                  <h2>Adres Bilgileri</h2>
                  <div>{this.props.user.addressList[0].city}</div>
                  <div>{this.props.user.addressList[0].address}</div>
                </div>
              </NavItem>

              <NavItem  onClick={()=>this.changeActiveTab("payment")} className="btn" style={{ flex: "1 1 300px" }}>
                <div className="border h-100">
                  <h2>Ödeme Bilgileri</h2>
                  <div>
                    Banka veya Kredi Kartı kullanarak ödemenizi güvenle
                    yapabilirsiniz.
                  </div>
                </div>
              </NavItem>
            </Nav>

            <TabContent className="container" activeTab={this.state.activeTabId}>
              <TabPane tabId={"address"}><AddressDetailArea/></TabPane>

              <TabPane tabId={"payment"}><PaymentInformationArea/></TabPane>
            </TabContent>
          </div>
        </div>

        
        <div className="" style={!this.state.md?{flex:"1"}:{width:"100%"}}>  <PaymentSummary center={!this.state.md}/></div>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    windowSize:state.windowReducer,
    user:state.userReducer
  }
}

export default connect(mapStateToProps)(PaymentPage);
