import React from "react";
import "./bestsellers.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Bsproduct from "./BsProduct/Bsproduct";

const BestSellers = () => {
  return (
    <div className="bestsellers">
      <header className="header__content">
        <p>BEST SELLERS</p>
        <div className="arrow__buttons">
          <IoIosArrowBack className="arrow__icon" />
          <IoIosArrowForward className="arrow__icon" />
        </div>
      </header>
      <Bsproduct/>
      <Bsproduct/>
      <Bsproduct/>
    </div>
  );
};

export default BestSellers;
