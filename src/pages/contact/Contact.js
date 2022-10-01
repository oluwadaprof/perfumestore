import React from "react";
import "./contact.scss";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact">
      <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav>
      <div className="main-page">
        <MainNav />
      </div>
      <header className="header__content">
        <p>CONTACT US</p>
      </header>
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
  );
};

export default Contact;
