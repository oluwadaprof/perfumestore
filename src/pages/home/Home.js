import React from "react";
import MainNav from "../../components/mainnav/MainNav";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav>
      <section className="main-page">
        <MainNav />
        <div className="homepage-content">
          <div className="explore__card">
            <p>Header</p>
            <p>
              Explore classic, Exotic And <br />
              Authentic Perfumes for her
            </p>
            <a href="">Explore</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
