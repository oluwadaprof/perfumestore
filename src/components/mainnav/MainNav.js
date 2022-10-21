import React, { useState } from "react";
import "./mainnav.scss";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  

  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          className='main__nav-item'>
          HOME
        </NavLink>
        <NavLink to="/about"  className='main__nav-item'>
          ABOUT US
        </NavLink>
        <NavLink to="/offer"  className='main__nav-item'>
          OFFER
        </NavLink>
        <NavLink to="/contact" className='main__nav-item'>
          CONTACT US
        </NavLink>
      </ul>
    </nav>
  );
};

export default MainNav;
