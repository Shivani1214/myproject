import React from "react";
import bg from "../assets/bg.jpg";
import "../styles/About.css";
function Thankyou() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Checkout</h1>
        <p>
         Thank you for your order
        </p>
      </div>
    </div>
  );
}

export default Thankyou;

