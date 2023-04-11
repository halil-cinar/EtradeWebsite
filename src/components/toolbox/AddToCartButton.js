import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../redux/actions/cartActions';
import Counter from './Counter';

//props
//addToCart:Func  onChange:Func

class AddToCartButton extends Component {
   state={
    quantity:1,
   }

    addToCart=()=>{
      this.props.addToCart&&this.props.addToCart(this.state.quantity)
    }

    onChange=(count)=>{
      this.setState({quantity:count});
      this.props.onChange&&this.props.onChange(count)
      
    }

    componentDidMount(){
      this.onChange(1)
    }

    

    render() {
        return (
            <div>
                 <Counter onChange={(count)=>this.onChange(count)}/>
  <Button onClick={()=>this.addToCart()} className='mx-4'>
    <i className='fas fa-shopping-cart'></i> Sepete Ekle
  </Button>
            </div>
        );
    }
}

function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
     // addToCart:bindActionCreators(addToCart,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddToCartButton);