import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/UPI/LandingPage/Un-regi/PCTop.jpg"
          alt="Add Image"
          className="checkout-ad"
        />
        <div>
          <h1 className="checkout-title">Your shopping Cart</h1>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
