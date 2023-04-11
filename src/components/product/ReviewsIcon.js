import React, { Component } from 'react';
//props
//rating:{reviews:[]}
class ReviewsIcon extends Component {
    render() {
        return this.props.rating&& (
            <div style={{...this.props.style,display:"flex",alignItems:"center"}}>
                 <h6>{this.props.rating.reviews.length} Yorum</h6>
                 <i className='	far fa-comments' style={{fontSize:"20px",marginLeft:"10px",alignSelf:"start"}}></i>
            </div>
        );
    }
}

export default ReviewsIcon;