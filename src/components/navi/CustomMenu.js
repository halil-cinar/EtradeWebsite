import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';
import MyAccount from './MyAccount';
import MyLocationHolder from './MyLocationHolder';

class CustomMenu extends Component {
    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <MyLocationHolder/> 
                <div style={{color:"black",margin:"0px 15px",}}></div>
               <Link to={{pathname:"/myCart"}}>  <CartSummary/></Link>
                <div style={{color:"black",margin:"0px 15px",}}></div>

                <MyAccount/>
            </div>
        );
    }
}

export default CustomMenu;