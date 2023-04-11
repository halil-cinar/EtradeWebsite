import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import RatingStars from "../product/RatingStars";
import ReviewsIcon from "../product/ReviewsIcon";
import ProductSeller from "../seller/ProductSeller";
import ImgSlider from "../toolbox/ImgSlider";
import SlickSlider from "../toolbox/SlickSlider";
import HeartButton from "../toolbox/HeartButton";
import AddToCartButton from "../toolbox/AddToCartButton";
import DeliveryOptions from "../seller/DeliveryOptions";
import ProductDescriptionArea from "../product/ProductDescriptionArea";
import ProductReviewsArea from "../product/ProductReviewsArea";
import ProductQuestionsArea from "../product/ProductQuestionsArea";
import { bindActionCreators } from "redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/actions/userActions";
import {
  getSubcategory,
  getSubcategoryApi,
} from "../../redux/actions/subcategoryActions";
import { getProductDealerApi } from "../../redux/actions/dealerActions";
import { addToCart } from "../../redux/actions/cartActions";
import { setCurrentProduct } from "../../redux/actions/productActions";

class ProductDetailPage extends Component {
  state = {
    activeTab: 2,
    favoriteButtonActive: false,
    subcategories: [],
    dealer: {},
    currentDeliveryOption: {},
  };

  setActiveTab = (id) => {
    this.setState({ activeTab: id });
  };

  getSubcategories = (categoryId) => {
    getSubcategoryApi(categoryId).then((data) =>
      this.setState({ subcategories: data })
    );
  };

  getDealer = (dealerId) => {
    dealerId &&
      getProductDealerApi(dealerId).then((data) =>
        this.setState({ dealer: data[0] })
      );
  };

  componentDidMount() {
    this.setActiveTab(1);
    this.setState({
      favoriteButtonActive: this.handleActive(this.props.userInfo),
    });
    this.getSubcategories(this.props.product.categoryId);
    this.getDealer(this.props.product.dealerId);
    console.log(this.props.params)
    this.props.params&&this.props.params.productId&&this.props.actions.setCurrentProduct(this.props.params.productId)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userInfo !== this.props.userInfo) {
      this.setState({
        favoriteButtonActive: this.handleActive(this.props.userInfo),
      });
    }

    if (prevProps.product !== this.props.product) {
      this.getSubcategories(this.props.product.categoryId);
      this.getDealer(this.props.product.dealerId);
    }
  }

  handleActive = (userInfo) => {
    if (userInfo.favoriteList == undefined) {
      return false;
    }
    return (
      userInfo.favoriteList.productIds.filter(
        (p) => p === this.props.product.id
      ).length > 0
    );
  };

  heartButtonOnClick = (product) => {
    if (
      this.props.userInfo.favoriteList.productIds.find((p) => p === product.id)
    ) {
      this.props.actions.removeFromFavorites(product, this.props.userInfo);
    } else {
      this.props.actions.addToFavorites(product, this.props.userInfo);
      console.log("added");
    }
  };

  addToCart = (quantity) => {
    console.log(quantity)
    this.props.actions.addToCart({
      product: this.props.product,
      deliveryOption: this.state.currentDeliveryOption,
      quantity,
      dealer: this.state.dealer,
      checked:true
    });
   
  };

  render() {
    return (
      <div className="w-100" style={{}}>
        <Breadcrumb listTag="div">
          <BreadcrumbItem href="#" tag="a">
            Ana Sayfa
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a">
            {this.props.categories.length > 0 &&
              this.props.categories.find(
                (c) => c.id == this.props.product.categoryId
              ) &&
              this.props.categories.find(
                (c) => c.id == this.props.product.categoryId
              ).categoryName}
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a">
            {this.state.subcategories.length > 0 &&
              this.state.subcategories.find(
                (c) => c.id == this.props.product.subcategoryId
              ) &&
              this.state.subcategories.find(
                (c) => c.id == this.props.product.subcategoryId
              ).categoryName}
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            {this.props.product.productName}
          </BreadcrumbItem>
        </Breadcrumb>

        <Row className="w-100">
          <Col md="6">
            <ImgSlider
              adaptiveHeight={true}
              slideUrls={this.props.product.imgURLs || []}
            />
          </Col>
          <Col md="6">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2>{this.props.product.title}</h2>
                <h6>{this.props.product.brandName}</h6>
              </div>
              <HeartButton
                onClick={() => this.heartButtonOnClick(this.props.product)}
                active={this.state.favoriteButtonActive}
              />
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div className="priceArea d-flex align-items-center">
                <div
                  className="oldPrice text-muted h4 "
                  style={{
                    display: this.props.product.oldPrice ? "block" : "none",
                  }}
                >
                  <del>{this.props.product.oldPrice+this.props.product.currency}</del>
                  <i className="	fas fa-angle-double-right text-success"></i>{" "}
                </div>
                <div className="unitPrice h3">
                  {this.props.product.unitPrice+this.props.product.currency}
                </div>
              </div>

              <div className="rating">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RatingStars
                    ratingTextType="ratingValue"
                    rating={this.props.product.rating}
                  />
                  <Link className="text-decoration-none text-dark">
                    <ReviewsIcon
                      style={{ marginTop: "5px", marginLeft: "8px" }}
                      rating={this.props.product.rating}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <ProductSeller dealer={this.state.dealer} />
            <AddToCartButton addToCart={this.addToCart} />
            <DeliveryOptions
              onChange={(item) => {
                console.log(item);
                this.setState({ currentDeliveryOption: item });
              }}
              deliveryOptions={
                this.state.dealer && this.state.dealer.deliveryOptions
              }
            />
          </Col>
        </Row>

        <Nav tabs justified pills>
          <NavItem>
            <Button
              className="w-100"
              outline
              color="dark"
              active={this.state.activeTab === 1}
              onClick={() => this.setActiveTab(1)}
            >
              Ürün Açıklaması
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className="w-100"
              outline
              color="dark"
              active={this.state.activeTab === 2}
              onClick={() => this.setActiveTab(2)}
            >
              Değerlendirmeler
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className="w-100"
              outline
              color="dark"
              active={this.state.activeTab === 3}
              onClick={() => this.setActiveTab(3)}
            >
              Soru&Cevap
            </Button>
          </NavItem>
        </Nav>

        <Container>
          <TabContent
            style={{ minHeight: "600px" }}
            activeTab={String(this.state.activeTab)}
          >
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <ProductDescriptionArea />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <ProductReviewsArea />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" className="h-100">
              <Row className="h-100">
                <Col className="h-100">
                  <ProductQuestionsArea />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.currentProductReducer,
    userInfo: state.userReducer,
    categories: state.categoryReducer,
    subcategories: state.subcategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToFavorites: bindActionCreators(addToFavorites, dispatch),
      removeFromFavorites: bindActionCreators(removeFromFavorites, dispatch),
      getSubcategories: bindActionCreators(getSubcategory, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch),
      setCurrentProduct:bindActionCreators(setCurrentProduct,dispatch),
    },
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
