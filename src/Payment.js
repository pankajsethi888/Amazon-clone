import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 plot.</p>
            <p>Delhi NCR</p>
          </div>
        </div>
        {/* Reviewing items */}
        <div className="payment-section">
          <h3>Review items and Delivery</h3>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">{/* Stripe Magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
