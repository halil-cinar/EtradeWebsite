import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyAccount extends Component {
  render() {

   let linkStyle={
        color:"white"
    }
    return (
      <div style={{display:"flex",alignItems:"center",color:"white"}}>
        <div>
          <i className="far fa-user " style={{fontSize:"28px" , marginRight:"8px"}}></i>
        </div>
        <div>
          
          <div
            style={{
              fontSize: "12px",
              fontWeight: "900px",
              textTransform: "uppercase",
            }}
          >
            Hesabım
          </div>
          <div>
            <Link style={linkStyle} >Üye Ol </Link>
             <span> - </span>
            <Link style={linkStyle}>Giriş Yap</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
