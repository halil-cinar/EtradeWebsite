import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { getPublicUserInfo } from "../../redux/actions/userActions";
import RatingStars from "./RatingStars";

class ProductReviewsArea extends Component {
  state = {
    reviews: [],
  };
  renderEmpty() {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <i
          style={{ fontSize: "100px", color: "gray" }}
          className="fas fa-comments"
        ></i>
        <h3>Bu ürün hakkında yorum bulunmuyor</h3>
        <Button>İlk Yorumu yapan sen ol </Button>
      </div>
    );
  }

  componentDidMount() {
    this.props.product.rating && this.updateReviews();
  }

  componentDidUpdate(prevProps, prevState) {

    try {
      if (
        prevState.reviews.length !== this.props.product.rating.reviews.length
      ) {
        this.updateReviews();
      }
    } catch (error) {}
  }

  updateReviews = (filter) => {
    if (!filter) {
      filter = (p) => true;
    }
    this.setState({
      reviews: this.props.product.rating.reviews.filter(filter),
    });
    this.props.actions.getPublicUserInfos(this.props.product.rating.reviews.filter(filter).map(item=>item.userId))
  };

  render() {
    return !(
      this.props.product &&
      this.props.product.rating &&
      this.props.product.rating.reviews.length > 0
    ) ? (
      this.renderEmpty()
    ) : (
      <div>
        <h4>{"Bu ürün için toplamda "+this.props.product.rating.reviews.length+" tane yorum yapılmıstır"}</h4>
        <ListGroup flush >
          {this.state.reviews.map((item) =>{
            let user=this.props.publicUserInfos.find(i=>i.id===item.userId)
            return (
            <ListGroupItem key={item.id}>
              <div className="d-flex">
                <div
                  className="d-grid "
                  style={{
                   padding:"30px",
                   margin:"10px",
                   height:"min-content",
                    borderRadius: "50%",
                    background: "gray",
                    placeItems: "center",
                  }}
                >
                 <strong>HÇ</strong>
                </div>

                  <div>
                   <div className="d-flex justify-content-left  align-items-center"> 
                   <RatingStars rating={{ratingValue:item.ratingValue}} ratingTextType="null"/>
                    <h6>{item.date}</h6>
                    <h6><span className="text-muted mx-4" style={{display:user?"":"none",}}>|</span>{user?user.name:""}</h6>
                   </div>
                  <div>
                    <p><strong>{item.title}</strong></p>
                    <p>{item.text}</p>
                  </div>

                  </div>

              </div>
            </ListGroupItem>
          )})}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.currentProductReducer,
    publicUserInfos:state.publicUserInfoReducer
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:{
      getPublicUserInfos:bindActionCreators(getPublicUserInfo,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductReviewsArea);
