import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
          alt="No image"
        />

        <div className="home-row">
          <Product
            id="513756943"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.59}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
          />
          <Product
            id="7531846853"
            title="Lap Desk for Bed, Laptop Table with Adjustable Tilting Top, Study Table/Bed Table/Home Working Lap Desk/Angle Adjustable Laptop Stand, Foldable and Portable (Black)"
            price={21.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/6145bTzEymL._SX679_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="4897875613"
            title="(Renewed) SanDisk Ultra Dual 32GB USB 3.0 OTG Pen Drive"
            price={5.29}
            rating={4}
            image="https://m.media-amazon.com/images/I/51MB+hgqK3L._AC_UY218_.jpg"
          />
          <Product
            id="9754315756"
            title="The Psychology of Money"
            price={3.39}
            image="https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id="6132078423"
            title="Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage) | Travel Adapter to be Purchased Separately"
            image="https://m.media-amazon.com/images/I/81I3w4J6yjL._SX679_.jpg"
            price={249.99}
            rating={4}
          />
        </div>
        <div className="home-row">{/* <Product /> */}</div>
      </div>
    </div>
  );
}

export default Home;
