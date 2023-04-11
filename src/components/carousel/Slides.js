import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';


class Slides extends Component {


  state={
    animating:false,
    activeIndex:0,
 
  }

  setAnimating=(animating)=>{
    this.setState({animating:animating})
  }

  setActiveIndex=(index)=>{
    this.setState({activeIndex:index})
  }

 
   

 

   goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setActiveIndex(newIndex);
  };

   next = () => {
    if (this.state.animating) return;
    let nextIndex = this.state.activeIndex ===this.props.slide.slides.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };

   previous = () => {
    if (this.state.animating) return;
    let nextIndex = this.state.activeIndex === 0 ?this.props.slide.slides.length - 1 : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };

   slides =()=>(this.props.slide.slides.length>0)?this.props.slide.slides.map((item) => {
    return (
     
      <CarouselItem
        onExiting={() => this.setAnimating(true)}
        onExited={() => this.setAnimating(false)}
        id={item.src}
      >
        
        <img width="100%" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  }):[];

  render() {
    return (
      <div>
         <Carousel
         className=''
      activeIndex={this.state.activeIndex}
      next={this.next}
      previous={this.previous}
     slide fade 
    >
      <CarouselIndicators
        items={this.props.slide.slides}
        activeIndex={this.state.activeIndex}
        onClickHandler={this.goToIndex}
      />
      {this.slides()}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={this.previous}
        
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={this.next}
      />
    </Carousel>
      </div>
    );
  }
}



export default Slides;