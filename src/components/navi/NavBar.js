import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as notificationActions from "../../redux/actions/navbarNotificationActions";

import { connect } from "react-redux";
import Promotion from "./Promotion";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupText,
  Input,
  Label,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import constant from "../../Constant/constant";
import urls from "../../Constant/urls";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import SearchBox from "./SearchBox";
import CustomMenu from "./CustomMenu";
class NavBar extends Component {
  componentDidMount() {
    this.props.actions.getNotification();

  }

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

renderPromotion(){
    if(this.props.notification.length>0){
        return (
            <Promotion
        
            imgID={this.props.notification[0].notificationImgId}
          />
        )
    }
    
}

  render() {
    return (
      <div>
        
       {
        this.renderPromotion()
       }

        <Navbar expand={true} color="danger">
          <NavbarBrand></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="w-100" navbar>
              <NavItem className="w-100" style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>
                    <SearchBox style={{maxWidth:"600px"}}/><CustomMenu/>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>

        <Categories />

       
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getNotification: bindActionCreators(
        notificationActions.getNotification,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    notification: state.navbarNotificationReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
