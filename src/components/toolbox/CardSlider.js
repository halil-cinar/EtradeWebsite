import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
} from "reactstrap";
import ProductCard from "../product/ProductCard";
import HeartButton from "./HeartButton";
import SliderControl from "./SliderControl";

class CardSlider extends Component {
  state = {
    animating: false,
    activeIndex: 0,
    items: [],
  };

  items = [];

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slide.slides !== this.props.slide.slides) {
      this.Group();
    }
  }

  componentWillMount() {
    this.Group();
  }

  setAnimating = (animating) => {
    this.setState({ animating: animating });
  };

  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setActiveIndex(newIndex);
  };

  next = () => {
    if (this.state.animating) return;
    let nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };

  previous = () => {
    if (this.state.animating) return;
    let nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };

  Group = () => {
    let arr = [];
    let colCount = this.props.colCount || 4;
    let i = 0;
    let result = [];

    arr = this.props.slide.slides.map((item, index) => (
      <Col
        key={index}
        xs="12"
        sm="6"
        md={colCount=4}
        lg={colCount=6}
      >
        {item}
      </Col>
    ));
    for (let j = 0; j < arr.length; j += colCount) {
      if (arr.length - j >= colCount) {
        result = [...result, []];
        for (let i = 0; i < colCount; i++) {
          result[result.length - 1] = [...result[result.length - 1], arr[i]];
        }
      } else {
        result = [...result, []];
        for (let i = 0; i < arr.length - j; i++) {
          result[result.length - 1] = [...result[result.length - 1], arr[i]];
        }
      }
    }
    this.setState({ items: result });
    this.items = result;
    console.log(result);
    return result;
  };

  componentDidMount() {
    this.Group();
  }

  slides = () =>
    this.props.slide.slides.length > 0
      ? this.state.items.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              onExiting={() => this.setAnimating(true)}
              onExited={() => this.setAnimating(false)}
              id={index}
            >
              <Row>{item}</Row>
            </CarouselItem>
          );
        })
      : [];

  render() {
    return (
      <div>
        <SliderControl
          previous={this.previous}
          next={this.next}
          style={{
            position: "absolute",
            right: "10px",
            marginTop: "5px",
            ...this.props.controlButtonStyle,
          }}
          dark
        />

        <Carousel
          style={{ display: "block" }}
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
          slide
          dark
          enableTouch={false}
        >
          <CarouselIndicators
            items={this.state.items}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />

          {this.slides()}
        </Carousel>
      </div>
    );
  }
}

export default CardSlider;
