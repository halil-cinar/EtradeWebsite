import React, { Component } from "react";
import { Button } from "reactstrap";

class ProductQuestionsArea extends Component {
  renderEmpty() {
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        
       
          <i style={{fontSize:"100px",color:"gray"}} className="fas fa-comments"></i>
          <h3>Bu ürün hakkında soru bulunmuyor</h3>
          <Button>Soru Sor</Button>
       
      </div>
    );
  }

  render() {
    return !this.props.description ? (
      this.renderEmpty()
    ) : (
      <div>
        <h4>ProductQuestionsArea</h4>
      </div>
    );
  }
}

export default ProductQuestionsArea;
