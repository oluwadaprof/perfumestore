import React, { useState } from "react";
import "./sidenav.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [showdropdown, setshowdropdown] = useState(true);
  const handleShowDropdown = () => {
    setshowdropdown(!showdropdown);
  };
  const [adjustImage, setadjustImage] = useState(true);

  const handleAdjustImage = () => {
    setadjustImage(!adjustImage);
  };


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
          <p
            onClick={() => {
              handleShowDropdown();
              handleAdjustImage();
            }}
          >
            All Category
          </p>
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
            <NavLink className="li">
              <a>BRANDS</a>
            </NavLink>
            <NavLink className="li">
              <a>WOMEN</a>
            </NavLink>
            <NavLink className="li">
              <a>MEN</a>
            </NavLink>
            <NavLink className="li">
              <a>UNISEX</a>
            </NavLink>
            <NavLink className="li">
              <a>CHILDREN</a>
            </NavLink>
            <NavLink className="li">
              <a>GIFT SETS</a>
            </NavLink>
            <NavLink className="li">
              <a>DEODORANTS</a>
            </NavLink>
            <NavLink to='/offer' className="li">
              <a>OFFERS</a>
            </NavLink>
          </ul>
        </section>
      )}
      <section
        className={adjustImage ? "brand__image" : "brand__image-top"}
      ></section>
      <section
        className={
          adjustImage ? "service__container-top" : "service__container"
        }
      >
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
