import React from "react";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <nav className="top__nav">
        <TopNav/>   
      </nav>
      <nav className="sidenav">
        <SideNav/>
      </nav>
    </div>
  );
};

export default Home;
