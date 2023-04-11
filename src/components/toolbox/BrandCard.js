import React, { Component } from 'react';

//props
//item:{logoUrl:""}

class BrandCard extends Component {
    render() {
        return (
            <div style={{
                width:"150px"
            }}>
                
                    <img style={{
                    borderRadius:"50%",
                    width:"100%"
                   
                }} src={this.props.item.logoUrl}></img>
               
            </div>
        );
    }
}

export default BrandCard;