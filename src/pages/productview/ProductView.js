import React from "react";
import "./productview.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";
import productimage from "../../assets/kindpng.png";

const ProductView = () => {
  return (
    <div className="productview">
      <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav>
      <div className="main-page">
        <MainNav />
          <div className="header__container" >
            <p>Salvatore Ferragamo Signorina Ribelle EDP 100ml For Women</p>
          </div>
        <div className="productview__content">
          <div className="image__container">
            <img src={productimage} alt="product image" />
          </div>
          <div className="image__content">
            <h3>Salvatore Ferragamo Signorina Ribelle EDP 100ml For Women</h3>
            <p>#49,000.00</p>
            <p>
              {" "}
              Salvatore Ferragamo Signorina Ribelle, a new fragrance for women.
              Signorina Ribelle is a flanker to 2012's Signorina. The notes
              feature mandarin, pear, pink pepper, frangipani, ylang ylang,
              jasmine, coconut milk, sandalwood and vanilla gelato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
