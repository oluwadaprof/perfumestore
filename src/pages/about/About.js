import React from "react";
import "./about.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

const about = () => {
  return (
    <div className="about">
      <div className="main-page">
        <header className="header__content">
          <p>ABOUT US</p>
        </header>
        <h1>About the scent store</h1>
        <p className="store__details">
          The Scents Store is Nigeria’s premier online perfume store, operating
          for almost 10 years in the fragrance Industry. The Scents Store was
          launched in 2013, We offer all the major designer perfume brands with
          over 5000 fragrances in our database, consisting of designer perfumes,
          celebrity perfumes, niche perfumes and the finest luxury perfumes. We
          sell 100% authentic brand new perfumes with guarantee. We provide
          expertise in terms of selecting the right perfumes for gift or
          personal use. Our trained and dedicated team are always available to
          give you the best choice and advice to fit your budget and preference.
        </p>
        <div className="contact__details">
          <div className="contact">
            <BsTelephone className="contact__icon" />
            <p>Call Us</p>
            <p>08126019796</p>
          </div>
          <div className="contact">
            <HiOutlineMailOpen className="contact__icon" />
            <p>Call Us</p>
            <p>08126019796</p>
          </div>
          <div className="contact">
            <IoLocationOutline className="contact__icon" />
            <p>Call Us</p>
            <p>08126019796</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
