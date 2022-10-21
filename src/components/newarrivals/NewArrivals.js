import React, { useRef } from "react";
import "./newarrivals.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "../productcard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const NewArrivals = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <IoIosArrowBack className="arrow__icon"  onClick={onClick} />
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <IoIosArrowForward className="arrow__icon" onClick={onClick} />
    );
  }


  return (
    <div className="newarrivals">
      <header className="header__content">
        <p>NEW ARRIVALS</p>
        <div className="arrow__buttons">
         
          
        </div>
      </header>
      <section className="product__container">
        {/* <Slider {...settings}> */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        {/* </Slider> */}
      </section>
    </div>
  );
};

export default NewArrivals;
