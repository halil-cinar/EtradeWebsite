import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  UncontrolledDropdown,
  Table,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { bindActionCreators } from "redux";
import urls from "../../Constant/urls";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as subcategoryActions from "../../redux/actions/subcategoryActions";

import SubcategoryCart from "./SubcategoryCart";

//props
// vertical:false,dropdownDirection:"down"||"up"||"end"||"start"


class Categories extends Component {
  state = {
    activeCategory: -1,
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    this.props.actions.getCategories();
  }

  hoverEvent = (category) => {
    this.setState({ activeCategory: category.id });
    this.props.actions.getSubcategories(category.id);
  };

  createSubcategories() {
    let arr = [];
    let colCount = 4;
    let i = 0;
    let result = [];

    arr = this.props.subcategories.map((item, index) => (
      <li>
        <SubcategoryCart category={item} />
      </li>
    ));
    for (let j = 0; j < arr.length; j += colCount) {
      if (arr.length - j >= colCount) {
        result = [...result, []];
        for (let i = 0; i < colCount; i++) {
          result[result.length - 1] = [...result[result.length - 1], arr[i]];
        }
      } else {
        result = [...result, []];
        for (let i = 0; i < arr.length - j; i++) {
          result[result.length - 1] = [...result[result.length - 1], arr[i]];
        }
      }
    }

    return result;
  }

 
  render() {
    return (
      <div>
        <Navbar expand={this.props.vertical?true:"lg"}  color="danger" className="w-100 h-100">
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav tabs pills justified vertical={this.props.vertical||false}  className="w-100">
              {this.props.categories.map((category) => (
                <NavItem
                
                  key={category.id}
                  onClick={() => this.hoverEvent(category)}
                  onMouseEnter={() => this.hoverEvent(category)}
                  onBlur={() => this.setState({ activeCategory: -1 })}
                  onMouseLeave={() => this.setState({ activeCategory: -1 })}
                >
                  <Dropdown
                  direction={this.props.dropdownDirection||"down"}
                    isOpen={
                      this.state.activeCategory == category.id &&
                      this.props.subcategories.length > 0
                    }
                  >
                    <DropdownToggle color="" nav>
                      <NavLink
                        active={this.state.activeCategory == category.id}
                      >
                        <img src=""></img>
                        {category.categoryName}   
                      </NavLink>  
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="">
                        {this.createSubcategories().map((item, index) => (
                          <ul key={"subcategory"+index} className="list-group list-group-horizontal-md list-unstyled">
                            {item}
                          </ul>
                        ))}
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getSubcategories: bindActionCreators(
        subcategoryActions.getSubcategory,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
    subcategories: state.subcategoryReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
