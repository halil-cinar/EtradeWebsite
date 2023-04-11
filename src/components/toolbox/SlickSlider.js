import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
//props
//slides:[(jsx)] style:{} centerMode:Boolean infinite:Boolean=true slidesToShow:Int=4 dots:boolean customPaging:Boolean=false
//responsive:Boolean

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        background: "black",
        borderRadius: "50%",
        backgroundSize: "110% 110%",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  style.color = "green";
  return (
    <div
      className={className}
      style={{ display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}



class SlickSlider extends Component {
  customPaging=(i)=>{
    console.log(this.props.slides)
  return <a  className="ft-slick__dots--custom"><img   src="https://picsum.photos/300/200"/></a>
}
  customPagingSettings = this.props.customPaging==true ? {
    
    customPaging:this.customPaging,
    centerMode: true,
    dotsClass: "slick-dots slick-thumb ",
    
  }:{};

  render() {
    var settings = {
      ...this.customPagingSettings,
     
      lazyLoad: true,
      className: "slider variable-width",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dots: this.props.dots ? true : false,
      centerMode: this.props.centerMode ? true : false,
      centerPadding: "0px",
      infinite:
        this.props.slides.length < Number(this.props.slidesToShow || 4)
          ? false
          : this.props.infinite == undefined
          ? true
          : this.props.infinite
          ? true
          : false,
      swipeToSlide: true,

      speed: 700,
slidesToShow:this.props.slidesToShow|| 3/(800/this.props.windowSize.width),
     
      initialSlide: 0,
      focusOnSelect: false,
      responsive: this.props.responsive&& [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2,
           
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow:  3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1,
          },
        },
        
        {
          breakpoint: 270,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      ...this.props.settings
    };
    return (
      <div style={{ ...this.props.style }}>
        <Slider {...settings}>
          {this.props.slides.map((item, index) => (
            <div style={{width:"100px"}} key={index}>{item} </div>
          ))}
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    windowSize:state.windowReducer
  }
}

export default connect(mapStateToProps)(SlickSlider);