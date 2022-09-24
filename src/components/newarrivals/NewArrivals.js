import React from "react";
import "./newarrivals.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "../productcard/ProductCard";

const NewArrivals = () => {
  return (
    <div className="newarrivals">
      <header  className="header__content">
        <p>NEW ARRIVALS</p>
        <div className="arrow__buttons" >
            <IoIosArrowBack className="arrow__icon" />
            <IoIosArrowForward className="arrow__icon"/>
        </div>
      </header>
      <section className="product__container" >
        <ProductCard/>
      </section>
    </div>
  );
};

export default NewArrivals;
