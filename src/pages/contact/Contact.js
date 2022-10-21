import React from "react";
import "./contact.scss";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact">
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
        <form>
          <input type='input' placeholder="name" />
          <input type='input' placeholder="email"/>
          <input type='input' placeholder="phonenumber"/>
          <textarea cols="10" rows="5" charswidth="23" placeholder="comment" />
          <button>Send</button>
        </form>
    </div>
  );
};

export default Contact;
