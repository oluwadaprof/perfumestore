import React from "react";
import "./productcard.scss";
import productImage from "../../assets/perfume2.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const ProductCard = () => {
  return (
    <div className="product__card">
      <p className="tag">New</p>
      <NavLink to='/productview'>
        <img src={productImage} alt="" />
      </NavLink>

      <div className="product__details">
        <p>Tom Ford Noir Extreme Parfum 100ml</p>
        <p>#65,000.00 NGN</p>
      </div>
      <div className="product__buttons">
        <button className="add__cart">Add Cart</button>
        <button className="heart">
          <IoMdHeartEmpty className="heart__icon" />
        </button>
        <button className="eye">
          <IoEyeOutline className="eye__icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
