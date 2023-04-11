import React, { Component } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import urls from "../../Constant/urls";
//props
//style:{}
class SearchBox extends Component {
  render() {
    return (
      <div
        class="input-group mb-3  input-group-lg "
        style={{ margin: "0", marginTop: "13px", ...this.props.style }}
      >
        <div class="input-group-prepend">
          <Link to={{pathname:"/"}}>
            {" "}
            <span
              class="input-group-text  h-100"
              style={{
                background: "url(" + urls.logoURL + ")",
                backgroundSize: "100% 100%",
                width: "50px",
                borderRadius: "10px 0 0 10px",
              }}
            ></span>
          </Link>
        </div>
        <input type="text" class="form-control text-capitalize"></input>
        <div class="input-group-append  input-group-lg">
          <span
            class="input-group-text bg-light "
            style={{ borderRadius: "0 40% 40% 0" }}
            role="button"
          >
            🔍
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBox;
