import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function SliderComponent({width, ...props }) {
    let [count, setcount] = useState(0);
    let [h, setcountp] = useState(0);
  
const windowSize=useSelector(state=>state.windowReducer)

  let artır = () => {
    setcount(count + 50);
  };

  return (
    <div className="" >
      <Button onClick={artır}>artır</Button>
      <div
        style={{
          overflowX: "hidden",
            maxWidth:"100vw",
          justifyContent: "start",
          paddingRight: "00px",
          transform: "rotate(0deg)",
        }}
      >
        <div
          className="d-flex "
          style={{
            flexWrap: "nowrap",
            transform: "translateX(-" + count + "px)",
          }}
        >
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgssshhhhhh</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button color="success">asdfgssshhhhhh</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgssshhhhhh</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgssshhhhhh</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "10px" }}>
            <Button>asdfgsss</Button>
          </div>
          <div style={{ transform: "rotate(0deg)", marginRight: "0px" }}>
            <Button>asdfgsss</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
