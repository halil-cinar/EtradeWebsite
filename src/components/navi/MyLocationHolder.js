import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyLocationHolder extends Component {
  render() {
    return (
      <div style={{display:"flex",alignItems:"center",color:"white"}}>
        <div >
          <i style={{ fontSize: "35px",marginRight:"3px" }} className="fas fa-map-marker-alt"></i>
        </div>
        <div >
        <div style={{fontWeight:"900",fontSize:"12px",textTransform:"uppercase"}}>Teslimat Adresi</div>
        <Link style={{color:"white"}}>Adres Ekle</Link>
          
        </div>
        <i style={{borderRight:"10px solid white",width:"10px"}}></i>
        
      </div>
    );
  }
}

export default MyLocationHolder;
