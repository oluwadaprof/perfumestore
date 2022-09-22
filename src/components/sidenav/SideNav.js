import React, { useState } from "react";
import "./sidenav.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCash } from "react-icons/gi";

const SideNav = () => {
  const [showdropdown, setshowdropdown] = useState(false);
  const handleShowDropdown = () => {
    setshowdropdown(!showdropdown);
  };
  const [adjustImage, setadjustImage] = useState(true);

  const handleAdjustImage = () => {
    setadjustImage(!adjustImage);
  };
  //onClick={() => { func1(); func2();}}

  return (
    <nav>
      <section className="all__category">
        <div className="all__category-tab">
          <HiOutlineMenuAlt2
            className="menu__icon"
            onClick={() => {
              handleShowDropdown();
              handleAdjustImage();
            }}
          />
          <p>All Category</p>
          <HiChevronDown
            className="dropdown__icon"
            onClick={() => {
              handleShowDropdown();
              handleAdjustImage();
            }}
          />
        </div>
      </section>
      {showdropdown && (
        <section className="category__dropdown">
          <ul>
            <li>
              <a>BRANDS</a>
            </li>
            <li>
              <a>WOMEN</a>
            </li>
            <li>
              <a>MEN</a>
            </li>
            <li>
              <a>UNISEX</a>
            </li>
            <li>
              <a>CHILDREN</a>
            </li>
            <li>
              <a>GIFT SETS</a>
            </li>
            <li>
              <a>DEODORANTS</a>
            </li>
            <li>
              <a>OFFERS</a>
            </li>
          </ul>
        </section>
      )}
      <section
        className={adjustImage ? "brand__image" : "brand__image-top"}
      ></section>
      <section className={adjustImage ? "service__container-top" :   "service__container"}>
        <div className="service__card-one">
          <FiPhoneCall className="service__card-icon" />
          <div className="service__card-text">
            <p>customer support</p>
            <p>9am to 5pm Weekdays</p>
          </div>
        </div>
        <div className="service__card-two">
          <TbTruckDelivery className="service__card-icon" />
          <div className="service__card-text">
            <p>Delivery Support</p>
            <p>Anywhere in Nigeria</p>
          </div>
        </div>
        <div className="service__card-three">
          <GiCash className="service__card-icon" />
          <div className="service__card-text">
            <p>Discounts Available</p>
            <p>10% off selelcted items</p>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default SideNav;
