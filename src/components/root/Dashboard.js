import React, { Component } from "react";
import { Container } from "reactstrap";
import Slides from "../carousel/Slides";
import { bindActionCreators } from "redux";
import * as bannerSlidesActions from "../../redux/actions/bannerSlideActions";
import { connect } from "react-redux";
import CardSlider from "../toolbox/CardSlider";
import DailyDeal from "./DailyDeal";
import ConceptPromotionArea from "../toolbox/ConceptPromotionArea";
import { getConceptPromotions } from "../../redux/actions/conceptPromotionActions";
class Dashboard extends Component {
  componentDidMount() {
    this.props.actions.getBannerSlides();
    this.props.actions.getConceptPromotions();
    
  }

  render() {
    return (
      <div>
        <Container>
          <Slides slide={this.props.mainBannerSlide} />
        </Container>
        <DailyDeal />
        <Container >

{console.log(this.props.conceptPromotions)}
        {
          this.props.conceptPromotions.map((item,index)=>(
             <ConceptPromotionArea promotion={item} />
          ))
        }

       
        
         
        </Container>

        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    mainBannerSlide: state.bannerSlidesReducer,
    conceptPromotions:state.conceptPromotionReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBannerSlides: bindActionCreators(
        bannerSlidesActions.getBannerSlides,
        dispatch
      ),
      getConceptPromotions:bindActionCreators(
        getConceptPromotions,dispatch
      )
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
