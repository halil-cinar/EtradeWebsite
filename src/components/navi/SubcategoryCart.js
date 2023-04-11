import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import urls from "../../Constant/urls";

class SubcategoryCart extends Component {
  state = {
    imgUrl: "",
  };

  componentDidMount() {
    this.getImgApi(this.props.category.imgId);
  }

  handleError(error) {
    console.log(error);
  }

  getImgApi(imgID) {
    let url = urls.imgURL + "?id=" + imgID;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ imgUrl: data[0].imgURL });
      })
      .catch(this.handleError);
  }

  render() {
    return (
        <li className="border-dark">
        <img width="90" height="70" src={this.state.imgUrl}></img>
        <div className="text-wrap" style={{fontSize:"11px " , textAlign:"center" , width:"70px"}}>{this.props.category.categoryName}</div>
      </li>
      
    );
  }
}

export default SubcategoryCart;
