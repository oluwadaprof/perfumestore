import React from "react";
import "./offer.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";
import ProductCard from "../../components/productcard/ProductCard";

const Offer = () => {
  return (
    <div className="offer">
      <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav>

      <div className="main__page">
        <div className="offer__nav" >
        <MainNav  />
        </div>
       
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
