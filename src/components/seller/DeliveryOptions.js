import React, { Component } from "react";
import { Input } from "reactstrap";
//props
//deliveryOptions:{} onChange:Func
class DeliveryOptions extends Component {
  state = {
    active: "1",
  };

  changeCurrentDeliveryOption = (item) => {
    this.setState({ active: item.id });
    this.props.onChange && this.props.onChange(item);
  };

  componentDidMount() {
    this.props.onChange &&
      this.props.deliveryOptions &&
      this.props.deliveryOptions.length > 0 &&
      this.props.onChange(this.props.deliveryOptions[0]);
  }

  componentDidUpdate(prevProps,prevState){
   if(prevProps.deliveryOptions!==this.props.deliveryOptions){
    this.props.onChange &&
    this.props.deliveryOptions &&
    this.props.deliveryOptions.length > 0 &&
    this.props.onChange(this.props.deliveryOptions[0]);
   }
  }

  renderEmpty() {
    return (
      <div>
        <div>
          <h3>Teslimat Secenekleri</h3>
        </div>
        <div className="d-flex  justify-content-left border align-items-center p-2 mb-1 ">
          <div>
            <strong>Bilinmeyen Teslimat</strong>
            <br></br>
            <small> ... gün içerisinde kargoda</small>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return !this.props.deliveryOptions ||
      this.props.deliveryOptions.length == 0 ? (
      this.renderEmpty()
    ) : (
      <div className="border p-2">
        <div>
          <h3>Teslimat Secenekleri</h3>
        </div>

        {this.props.deliveryOptions.map((item) => (
          <div
            key={item.id}
            onClick={() => this.changeCurrentDeliveryOption(item)}
            className="d-flex  justify-content-between border align-items-center p-2 mb-1 "
          >
            <div className="d-flex align-items-center">
              <div>
                <Input
                  checked={this.state.active === item.id}
                  readOnly
                  type="radio"
                  className="d-block mx-2"
                  style={{ padding: "10px" }}
                />
              </div>
              <div>
                <strong>{item.deliveryType}</strong>
                <br></br>
                <small>{item.deliveryTime} gün içerisinde kargoda</small>
              </div>
            </div>
            <div>
              <img src={item.deliveryCompanyImgUrl}></img>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DeliveryOptions;
