import React, { Component } from 'react';
//props
//rating:{ratingValue:0.0,ratingCount:"0"}  //ratingTextType:""=ratingCount //ratingText 
class RatingStars extends Component {
    render() {
let    ratingText=this.props.ratingTextType||"ratingCount"

        return this.props.rating&&(
            <div>
                <div
              style={{
                overflow: "hidden",
                width:
                  this.props.rating.ratingValue > 0
                    ? this.props.rating.ratingValue * 22 + "px"
                    : 5 * 20 + "px",
                height: "min-content",
                display: "inline-block",
              }}
              className="card-subtitle overflow-hidden "
            >
              <div
                style={{
                  overflow: "hidden",
                  width: "min-content",
                  height: "min-content",
                  fontSize: "10px",
                }}
              >
                {this.props.rating.ratingValue > 0 ? (
                  <span style={{ fontSize: "16px" }}> ⭐⭐⭐⭐⭐</span>
                ) : (
                  <span style={{ fontSize: "24px" }}>✰✰✰✰✰</span>
                )}
              </div>
            </div>
            <span
              style={{
                display: "inline-block",
                verticalAlign:
                  this.props.rating.ratingValue > 0 ? "7px" : "12px",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            >
              {ratingText!=="null"?("(" + this.props.rating[ratingText] + ")"):""}

            </span>
            </div>
        );
    }
}

export default RatingStars;