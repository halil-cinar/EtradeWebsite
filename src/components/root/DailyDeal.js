import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { getSpecialProducts } from "../../redux/actions/productActions";
import ProductCard from "../product/ProductCard";
import CardSlider from "../toolbox/CardSlider";
import SlickSlider from "../toolbox/SlickSlider";
class DailyDeal extends Component {
  componentDidMount() {
    this.props.actions.getSpecialProducts();
  }

  product = {
    id: 1,
    categoryId: 2,
    subcategoryId: 1,
    productName: "Chai",
    title: "Chai",
    productDescription: "",
    unitPrice: 23,
    oldPrice: 28,
    unitsInStock: 53,
    imgURL:
      "https://n11scdn.akamaized.net/a1/30/22/08/01/48/03/07/08/65/70/50/72/22/23437144898315374084.png",
    specialBadge: "",
    rating: {
      ratingCount: 1,
      ratingValue: 2.5,
    },
  };

  render() {
    return (
      <div className="" style={{ margin: "20px 0px",backgroundColor:"#252e41" }}>
       
        <Container className="w-100" fluid="lg">
          {" "} <h2 className="text-light">Süper Fırsatlar 🎉</h2>
<SlickSlider infinite={false}      dots slides={this.props.specialProducts.map(item=>(<ProductCard product={item}/>))} />

        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    specialProducts: state.specialProductsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSpecialProducts: bindActionCreators(getSpecialProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyDeal);
