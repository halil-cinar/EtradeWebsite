import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Label,
  Row,
  Tooltip,
  UncontrolledTooltip,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { handleError } from "../../redux/actions/imageActions";
import { setCurrentProduct } from "../../redux/actions/productActions";
import { updateFavorites } from "../../redux/actions/userActions";
import HeartButton from "../toolbox/HeartButton";
import RatingStars from "./RatingStars";

//props
// addToFavorites:Func style:{}
class ProductCard extends Component {
  state = {
    style: {
      overflow: "hidden",
      transition: "all 1s",
    },
    mouseX: 0,
    mouseY: 0,
    toolTipActive: false,
    favoriteButtonActive: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userInfo !== this.props.userInfo) {
      this.handleActive(this.props.userInfo);
    }
  }

  componentDidMount() {
    this.setState({
      favoriteButtonActive: this.handleActive(this.props.userInfo),
    });
  }

  heartButtonOnClick = (product) => {
    if (
      this.props.userInfo.favoriteList.productIds.find((p) => p === product.id)
    ) {
      this.removeFromFavorites(product);
    } else {
      this.addToFavorites(product);
      console.log("added");
    }
  };

  addToFavorites = (product) => {
    let newUserInfo = { ...this.props.userInfo };
    newUserInfo.favoriteList.productIds = [
      ...newUserInfo.favoriteList.productIds,
      product.id,
    ];
    this.props.actions.updateFavorites(newUserInfo);
  };

  removeFromFavorites = (product) => {
    let newUserInfo = { ...this.props.userInfo };
    newUserInfo.favoriteList.productIds =
      newUserInfo.favoriteList.productIds.filter((p) => p !== product.id);
    this.props.actions.updateFavorites(newUserInfo);
  };

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

  handleClick=(event)=>{
    this.props.actions.setCurrentProduct(this.props.product.id)
  }

  render() {
    return (
      
      <div className="bord" style={{...this.props.style,display:"block",width:"max-content",display:"flex" , flexDirection:"row-reverse" ,}}>
        <div style={{display:"block",position:"absolute",width:"3px",margin:"5px",zIndex:"1080", transform:"translate(-30px,5px)"}}>
        <div style={{position:"relative" ,zIndex:"1"}}>
        <HeartButton
              active={this.state.favoriteButtonActive}
              onClick={() => this.heartButtonOnClick(this.props.product)}
            />
        </div>
        </div>
        <Link
        preventScrollReset={true}
          className="card text-decoration-none offset-md-1"
          style={{
            
            color: "black",
            minWidth:"150px",
            maxWidth:"250px",
            
          }}
          to={{ pathname: "/productDetail/"+this.props.product.id,state:{ some: "value" }}} 
          body
          color="dark "
          id={"product" + this.props.product.id}
          outline
          onMouseEnter={() => this.setState({ toolTipActive: true })}
          onMouseLeave={() => this.setState({ toolTipActive: false })}
          onClick={(event)=>this.handleClick(event)}
        >
          <h6
            className="text-center rounded text-wrap"
            style={{
              width: "100%",
              background: "rgba(255,0,0,0.6)",
              position: "absolute",
            }}
          >
            {this.props.product.specialBadge}
          </h6>
          <img
            alt="Card image cap"
            src={this.props.product.imgURLs[0]}
            width="100%"
          />

          <div className="card-img-overlay">
           
          </div>
          <h6
            className="text-center rounded text-wrap"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.6)",
              color: "green",
              fontWeight: "700",
              marginTop: "-20px",
            }}
          >
            {this.props.product.shipping.cargoText}
          </h6>
          <div className="card-body">
            <div
              className=""
              style={{ marginTop: "-20px", marginBottom: "-10px" }}
              tag="h5"
            >
              {this.props.product.title}
            </div>
           <RatingStars rating={this.props.product.rating}  />

            <div className="price-area" style={{margin:"0"}}>
              <span
                className="old-price text-muted"
                style={{ fontSize: "18px" }}
              >
                <del>{this.props.product.oldPrice?(this.props.product.oldPrice+this.props.product.currency):""}</del>
              </span>

              <span
                className="new-price"
                style={{ fontSize: "23px",  }}
              >
                <strong style={{margin:"0"}}> {this.props.product.unitPrice+this.props.product.currency}</strong>
              </span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              transform: "translateY(34vh) translateX(3vw)",
              background: "rgba(0,0,0,0.8)",
              color: "white",
              padding: "0px 15px",
              fontSize: "12px",
              display: this.state.toolTipActive ? "block" : "none",
            }}
          >
            {this.props.product.title}
          </div>
        </Link>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateFavorites: bindActionCreators(updateFavorites, dispatch),
      setCurrentProduct:bindActionCreators(setCurrentProduct,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
