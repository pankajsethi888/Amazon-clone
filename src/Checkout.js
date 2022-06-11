import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/UPI/LandingPage/Un-regi/PCTop.jpg"
          alt="Add Image"
          className="checkout-ad"
        />
        <div>
          <h3>{user && `Hi, ${user?.email}`}</h3>
          <h2 className="checkout-title">Your shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
