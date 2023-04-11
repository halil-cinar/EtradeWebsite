import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Collapse, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { getSubcategory } from "../../redux/actions/subcategoryActions";
class MenuCategoryList extends Component {
  state = {
    activeCategoryId: undefined,
  };

  componentDidMount() {
    this.props.actions.getCategories();
  }

  hoverEvent = (category) => {
    this.setState({ activeCategory: category.id });
    this.props.actions.getSubcategories(category.id);
  };

  categoryClickEvent = (category) => {
    let newId = category.id;
    if (this.state.activeCategoryId === category.id) {
      newId = -1;
    }
    this.setState({ activeCategoryId: newId });
    this.props.actions.getSubcategories(newId);
  };

  render() {
    return (
      <div>
        <ListGroup flush>
          {this.props.categories.map((item, index) => (
            <ListGroupItem key={"category" + index}>
              <div
                className="d-flex align-items-center justify-content-between "
                onClick={() => this.categoryClickEvent(item)}
              >
                <div className="d-flex align-items-center">
                  <img height="20px" className="mx-2 " src={item.imgURL}></img>
                  <strong>{item.categoryName}</strong>
                </div>
                <i className="fas fa-angle-double-down my-1 mx-2"></i>
              </div>

              <Collapse isOpen={this.state.activeCategoryId === item.id}>
                
                <ListGroup flush>
                  {this.props.subcategories.map((item, index) => (
                    <ListGroupItem key={"subCategory" + index}>
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="d-flex align-items-center">
                          <img
                            height="20px"
                            className="mx-2 "
                            src={item.imgURL}
                          ></img>
                          <strong>{item.categoryName}</strong>
                        </div>
                        <i className="fas fa-angle-double-down my-1 mx-2"></i>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Collapse>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      getSubcategories: bindActionCreators(getSubcategory, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
    subcategories: state.subcategoryReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCategoryList);
