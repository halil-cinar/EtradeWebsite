import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import urls from "../../Constant/urls";
import * as imgActions from "../../redux/actions/imageActions";
class Promotion extends Component {
  state = {
    imgUrl: "",
  };

  componentDidMount() {
    this.getImgApi(this.props.imgID);
  }

handleError(error){
  console.log(error)

}

  getImgApi(imgID) {
    let url = urls.imgURL + "?id=" + imgID;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        this.setState({ imgUrl: data[0].imgURL })
       
      }).catch(this.handleError)
  }

  render() {
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          <img
            src={this.state.imgUrl}
            style={{
              width: "100%",
              height: "50px",
            }}
          ></img>
        </Link>
      </div>
    );
  }
}

export default Promotion;
