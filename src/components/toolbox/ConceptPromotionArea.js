import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductCard from "../product/ProductCard";
import BrandCard from "./BrandCard";
import CardSlider from "./CardSlider";
import SlickSlider from "./SlickSlider";

class ConceptPromotionArea extends Component {
  state = {
    sm: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.windowSize.width !== this.props.windowSize.width) {
      this.setState({ sm: this.props.windowSize.width < 780 });
    }
  }
  componentDidMount(){
    this.setState({ sm: this.props.windowSize.width < 780 });
  }

  product = {
    id: 1,
    categoryId: 2,
    subcategoryId: 1,
    productName: "Chai",
    title: "Chai",
    productDescription: "",
    unitPrice: 23 + "TL",
    oldPrice: 28 + "TL",
    unitsInStock: 53,
    imgURLs: [
      "https://n11scdn.akamaized.net/a1/30/22/08/01/48/03/07/08/65/70/50/72/22/23437144898315374084.png",
    ],
    specialBadge: "",
    rating: {
      ratingCount: 1,
      ratingValue: 2.5,
    },

    shipping: {
      cargoText: "Ücretsiz Kargo",
    },
  };

  render() {
    return (
      <div
        style={{
          cursor: "pointer",
          width: "100%",
          height: this.state.sm ? "105%" : "",
          margin: "40px 0",
          borderRadius: "10px",
          background: this.props.promotion.color,
          display: this.state.sm ? "block" : "flex",
        }}
      >
        <img
          style={{
            width: !this.state.sm ? "50%" : "100%",
           
          }}
          src={this.props.promotion.imgURL}
        />
        <div
          style={{
            boxShadow: "-105px 0px 100px -45px "+this.props.promotion.color,
            display: "flex",
            justifyContent: "center",
            width: this.state.sm ? "100%" : "50%",
          }}
        >
          <div style={{ width: "100%" }}>
            <SlickSlider
              style={{
                width: "100%",
              }}
              
              slidesToShow={this.props.promotion.products.length>3?3:this.props.promotion.products.length}
              slides={[
                ...this.props.promotion.products.map((product) => (
                  <ProductCard
                    key={
                      "promotion" + this.props.promotion.id + "_" + product.id
                    }
                    product={product}
                  />
                )),
              ]}
            ></SlickSlider>
            <div style={{ height: "10vw" }}></div>
            <SlickSlider
              style={{width:"100%"}}
              infinite={false}
              slidesToShow={3}
              responsive
              
              slides={[
                ...this.props.promotion.brands.map((item)=>(
                  <BrandCard
                  item={{ logoUrl:item.logoURL }}
                />
                ))
                
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    windowSize: state.windowReducer,
  };
}

export default connect(mapStateToProps)(ConceptPromotionArea);
