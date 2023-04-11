import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//props
// active:boolean  onClick:Func
class HeartButton extends Component {
  state = {
    active: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.active !== this.props.active) {
      this.setState({ active: this.props.active });
    }
  }

  componentDidMount() {
    if (this.props.active) {
      this.setState({ active: this.props.active });
    }
  }

  onClickEvent = () => {
    this.setState({ active: !this.state.active });
    if (this.props.onClick !== undefined) {
      this.props.onClick(this.state.active);
    }
  };

  render() {
    return (
      <div>
        <h5
          className="rounded text-end  "
          style={{ width: "100%", fontSize: "20px", cursor: "pointer" }}
        >
          <a
            className="text-decoration-none"
            style={{}}
            onClick={() => this.onClickEvent()}
          >
            {this.state.active ? "💙" : "🤍"}
          </a>
        </h5>
      </div>
    );
  }
}

export default HeartButton;
