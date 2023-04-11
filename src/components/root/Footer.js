import React, { Component } from "react";
import { Link } from "react-router-dom";
import constant from "../../Constant/constant";

class Footer extends Component {
  render() {
    return (
      <div style={{...this.props.style}}>
        {/*Remove the container if you want to extend the Footer to full width.*/}
        <div className=" ">
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#929fba" }}
          >
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                    {constant.STORE_NAME}
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <hr className="w-100 clearfix d-md-none" />

                  

                  <hr className="w-100 clearfix d-md-none" />

                  <hr className="w-100 clearfix d-md-none" />

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      İletişim
                    </h6>
                    <p>
                      <i className="fa fa-home mr-3"></i> Sivas / Türkiye
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3"></i> info@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3"></i> +90 234 567 88
                    </p>
                    <p>
                      <i className="fa fa-print mr-3"></i> +90 234 567 89
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Follow us
                    </h6>

                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>

                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#dd4b39" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-google"></i>
                    </Link>

                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#ac2bac" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>

                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#0082ca" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#333333" }}
                      role="button"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <div
              className="text-center p-2 "
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <u className="text-white">
                © {constant.STORE_NAME} :Tüm hakları Saklıdır
              </u>

              <span
                className="text-center "
                style={{ fontSize: "35px", marginRight: "10px" }}
              >
                <i className="fa fa-credit-card"> </i>
                <i className="	fab fa-cc-mastercard"> </i>
                <i className="fab fa-cc-visa"></i>
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
