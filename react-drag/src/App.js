import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import red from './red.svg';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px white", // white,
  background: "white"
};

const divStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const Enable = {
  bottom: false,
  bottomLeft: false,
  bottomRight: false,
  left: false,
  right: false,
  top: false,
  topLeft: false,
  topRight: false,
}

const App = () => (
  <Rnd
    style={style}
    default={{
      x: 200,
      y: 100,
      width: 50,
      height: 50,
    }}
    enableResizing={Enable}
    bounds="window"
  >
  <div style={divStyle}>
  <figure>
    <img src={red} alt="expiry" draggable="false" width="100px" ></img>
   </figure>
    <p><strong>Expiry Payoff</strong></p>
  </div>
   
  </Rnd>
);

render(<App />, document.getElementById("root"));
