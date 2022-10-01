import React from 'react'
import './offer.scss'
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import MainNav from "../../components/mainnav/MainNav";

const Offer = () => {
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
    </div>
  )
}

export default Offer