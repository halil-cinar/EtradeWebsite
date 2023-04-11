import React, { Component } from "react";
import { bindActionCreators } from "redux";
import NavBar from "../navi/NavBar";
import * as imgActions from "../../redux/actions/imageActions";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { getUserInfo } from "../../redux/actions/userActions";
import { updateWindowSize } from "../../redux/actions/windowActions";

import Footer from "./Footer";
import { Link, Route, Routes, ScrollRestoration } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import CartPage from "./CartPage";
import LeftMenu from "../leftMenu/LeftMenu";
import Deneme from "../toolbox/Deneme";
import ProductDetailPageConnection from "../common/ProductDetailPageConnection";
import PaymentPage from "../payment/PaymentPage";
import PaymentPageConnection from "../common/PaymentPageConnection";
import ProductListingPage from "../productListing/ProductListingPage";
class App extends Component {
  componentDidMount() {
    // this.props.actions.getImg()
    this.props.actions.getUserInfo("1");
    this.handleResize();
    window.onresize = this.handleResize;
  }

  handleResize = () => {
    var windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    this.props.actions.updateWindowSize(windowWidth, windowHeight);
    console.log("Window width: " + windowWidth);
  };

  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
        <Link to={{pathname:"/productListing/telefon/1"}}>Git</Link>
          <LeftMenu />
          <NavBar />
          <Routes
          
          >
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/productDetail/:productId"
              element={<ProductDetailPageConnection />}
            />
            <Route
              path="/productListing/:categoryName/:categoryId/:filterCategoryName/:filterCategoryId"
              element={<ProductListingPage />}
              
            />
             <Route
              path="/productListing/:categoryName/:categoryId/:filterCategoryName/:filterCategoryId/:filters"
              element={<ProductListingPage />}
              
            />
            
             <Route
              path="/productListing/:categoryName/:categoryId/"
              element={<ProductListingPage />}
              
            />
            
            <Route path="/myCart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPageConnection />} />
            <Route path="*" element={<h1>404 </h1>} />
          </Routes>
        </div>
        <Footer style={{}} />
      </div>
    );
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getImg: bindActionCreators(imgActions.getAllImg, dispatch),
      getUserInfo: bindActionCreators(getUserInfo, dispatch),
      updateWindowSize: bindActionCreators(updateWindowSize, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
