import React, { Component } from "react";
import {
  Button,
    Collapse,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  UncontrolledCollapse,
} from "reactstrap";
import MenuCategoryList from "./MenuCategoryList";

class LeftMenu extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "10px",
           fontSize:"30px",
            zIndex: "1050",
            cursor: "pointer",
          }}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <Button outline><i style={{fontSize:"30px"}} className="fas fa-bars"/></Button>
        </div>

        <Offcanvas
          isOpen={this.state.isOpen}
          scrollable
          toggle={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <OffcanvasHeader
            toggle={() => this.setState({ isOpen: !this.state.isOpen })}
          ></OffcanvasHeader>
          <OffcanvasBody>
            <ListGroup >

              <ListGroupItem className="d-flex align-items-center">
                <i
                  className="fas fa-home my-1 mx-2"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                <strong>Ana Sayfa</strong>
              </ListGroupItem>

              <ListGroupItem >
                <div className="d-flex align-items-center justify-content-between " id="leftMenuCategoriesToggle">
                <div className="d-flex align-items-center">
                  <i
                    className="fas fa-bars my-1 mx-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <strong>Katagoriler</strong>
                </div>
                <i
                  className="fas fa-angle-double-down my-1 mx-2"
                  style={{ justifySelf: "end" }}
                ></i>
                </div>

                <UncontrolledCollapse toggler="#leftMenuCategoriesToggle">
                    <MenuCategoryList/>
                </UncontrolledCollapse>

              </ListGroupItem>


            </ListGroup>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    );
  }
}

export default LeftMenu;
