import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
//props
//style:{}  slideUrls:["imgUrl"] adaptiveHeight:Boolean
export default class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  responsiveSettings=[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        

      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
       
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
       
      },
    },
    {
      breakpoint: 270,
      settings: {
        slidesToShow: 3,
       
      },
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 3,
      },
    },
  ]

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <Container>
          <Slider
         adaptiveHeight={this.props.adaptiveHeight?true:false}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            {this.props.slideUrls.map((url) => (
              <div>
                <img style={{ width: "100%"}} src={url}></img>
              </div>
            ))}
          </Slider>
          <div
            style={{
              margin: "5px 0px",
            }}
          >
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={5}
              infinite={true}
              swipeToSlide={true}
              focusOnSelect={true}
              adaptiveHeight={true}
              centerMode={true}
              responsive={[...this.responsiveSettings]}
              arrows={false}
            >
              {this.props.slideUrls.map((url) => (
                <div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "5vw", height: "5vh", background: "red" }}
                      src={url}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>{" "}
        </Container>
      </div>
    );
  }
}
