import React from "react";
import "./offer.scss";
import ProductCard from "../../components/productcard/ProductCard";

const Offer = () => {
  return (
    <div className="offer">

      <div className="main__page">
        <section className="offers">
          <header className="header__content">
            <p>OFFERS</p>
          </header>
        </section>

        <section className="product__container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </div>
    </div>
  );
};

export default Offer;
