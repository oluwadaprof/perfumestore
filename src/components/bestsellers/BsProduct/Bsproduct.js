import React from "react";
import "./bsproduct.scss";
import productavatar from "../../../assets/kindpng.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Bsproduct = () => {
  return (
    <div className="bsproduct">
      <img src={productavatar} alt="" />
      <div className="bsproduct__details">
        <div className="product__texts">
          <h1>Amouage Interlude EDP 100ml Perfume For Men</h1>
          <p>#125,000.00 NGN</p>
          <p>
            Arden Beauty by Elizabeth Arden is a Floral Green fragrance for
            women. Arden Beauty was launched in 2002. The nose behind this
            fragrance is Antoine Lie....
          </p>
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
    </div>
  );
};

export default Bsproduct;
