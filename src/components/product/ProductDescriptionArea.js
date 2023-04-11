import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class ProductDescriptionArea extends Component {

    renderEmpty(){
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
              <h3>Bu ürün hakkında bir acıklama  bulunmuyor</h3>
              <Button>Ürün Hakkındaki sorularınızı satıcıya sorabilirsiniz </Button>
           
          </div>
        )
    }

    render() {
        return !this.props.product.description?this.renderEmpty(): (
            <div>
               
            <div  dangerouslySetInnerHTML={{__html:this.props.product.description.html}}/>
            <video c></video>
            
          
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        product:state.currentProductReducer
    }
}

export default connect(mapStateToProps)(ProductDescriptionArea);