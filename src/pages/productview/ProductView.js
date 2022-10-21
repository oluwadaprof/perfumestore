import React, { useState } from "react";
import "./productview.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";
import productimage from "../../assets/kindpng.png";
import ProductCard from '../../components/productcard/ProductCard'
import { FiBox } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductView = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handletoggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="productview">
      {/* <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav> */}
      <div className="main-page">
        {/* <MainNav /> */}
        <div className="header__container">
          <p>Salvatore Ferragamo Signorina Ribelle EDP 100ml For Women</p>
        </div>
        <div className="productview__content">
          <div className="image__container">
            <img src={productimage} alt="product image" />
          </div>
          <div className="image__content">
            <h3 className="product__title">
              Salvatore Ferragamo Signorina Ribelle EDP 100ml For Women
            </h3>
            <p className="product__price">#49,000.00</p>
            <p>
              {" "}
              Salvatore Ferragamo Signorina Ribelle, a new fragrance for women.
              Signorina Ribelle is a flanker to 2012's Signorina. The notes
              feature mandarin, pear, pink pepper, frangipani, ylang ylang,
              jasmine, coconut milk, sandalwood and vanilla gelato.
            </p>
            <button className="btn add__cart">Add To Cart</button>
            <button className="btn buy__now">Buy It Now</button>
            <div className="shipping"  >
              <div className="shipping__header">
                <div className="shipping__text">
                  <FiBox onClick={handletoggle} className="box" />
                  <p onClick={handletoggle}>Shipping and Return</p>
                </div>
                <div className="arrow__icon">
                  <MdKeyboardArrowDown
                    onClick={handletoggle}
                    className={toggleIcon ? "icon" : "flip__icon"}
                  />
                </div>
              </div>
              <div className="shipping__content" >
                <p className={toggleIcon ?'p' :'p__none' } >You may return any unopened merchandise in its original condition, 
                  including original packaging and packing slip within 
                  30 days of receipt and you will receive a full refund 
                  less shipping and any gift wrapping charges.</p>
              </div>
            </div>
          </div>
        </div>
      
        <section className="also__like">
          <header className="header__content">
            <p>You may also like</p>
          </header>
          <div className="also__like-product" >
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
          
        </section>
          
        
      </div>
    </div>
  );
};

export default ProductView;
