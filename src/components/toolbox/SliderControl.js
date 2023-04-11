import React, { Component } from "react";
import { Link } from "react-router-dom";

//default props
// previous:func next:func

//optinal props
// arrows:[left,right] arrowIndex:Int disabledLeft:boolean disabledRight:boolean style:Object

class SliderControl extends Component {
  state = {
    active: true,
    leftArrow: "",
    rightArrow: "",
    disabledLeft: false,
    disabledRight: false,
    dark: false,
  };
  leftArrows = ["👈🏻", "◀"];
  rightArrows = ["👉🏻", "➤"];

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.disabledLeft !== this.props.disabledLeft) {
      this.setState({ disabledLeft: this.props.disabledLeft });
    }
    if (prevProps.disabledRight !== this.props.disabledRight) {
      this.setState({ disabledRight: this.props.disabledRight });
    }
    if (prevProps.dark !== this.props.dark) {
      this.setState({ dark: this.props.dark });
    }
  }

  componentDidMount() {
    if (this.props.arrows) {
      //Array[left,right]
      this.setState({
        leftArrow: this.props.arrows[0],
        rightArrow: this.props.arrows[1],
      });
    } else {
      let arrowIndex = this.props.arrowIndex; //integer
      if (arrowIndex == undefined) {
        arrowIndex = 0;
      }
      if (arrowIndex >= this.leftArrows.length) {
        arrowIndex = this.leftArrows.length - 1;
      }
      this.setState({
        leftArrow: this.leftArrows[arrowIndex],
        rightArrow: this.rightArrows[arrowIndex],
      });
    }
  if (this.props.dark) {
    this.setState({dark:this.props.dark});
  }

  }

  onClickEvent = (name) => {
    if (name == "left") {
      this.props.previous();
    } else if (name == "right") {
      this.props.next();
    }
  };

  style = { borderRadius: "50%", marginRight: "10px"};
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <h5
          className="rounded text-end  "
          style={{ width: "100%", fontSize: "20px", cursor: "pointer" }}
        >
          <Link
            className="text-decoration-none"
            style={{
              ...this.style,
              display: this.state.disabledLeft ? "none" : "inline-block",
              background:this.state.dark? "black":"white",
            }}
            onClick={() => this.onClickEvent("left")}
          >
            {this.state.leftArrow}
          </Link>
          <Link
            className="text-decoration-none"
            style={{
              ...this.style,
              display: this.state.disabledRight ? "none" : "inline-block",
              background:this.state.dark? "black":"white",
            }}
            onClick={() => this.onClickEvent("right")}
          >
            {this.state.rightArrow}
          </Link>
        </h5>
      </div>
    );
  }
}

export default SliderControl;
