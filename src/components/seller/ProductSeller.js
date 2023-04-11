import React, { Component } from 'react';
import { Button } from 'reactstrap';
//props
// dealer:{companyName:""}  askToSellerEvent:Func
class ProductSeller extends Component {
    render() {
        return (
            <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
               
               <div style={{display:"flex" ,alignItems:"center"}}>
                <i className='fas fa-store' ></i>
               <Button disabled color='light' >Satıcı:</Button>

<Button  color='light' >{this.props.dealer.companyName}</Button>

               </div>

                

               <Button  onClick={this.props.askToSellerEvent}>Satıcıya sor</Button>

            </div>

        );
    }
}

export default ProductSeller;