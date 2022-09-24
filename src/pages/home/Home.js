import React from "react";
import MainNav from "../../components/mainnav/MainNav";
import NewArrivals from "../../components/newarrivals/NewArrivals";
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
            <p className="explore__card-text" >Header</p>
            <p className="explore__card-text">
              Explore classic, Exotic And <br />
              Authentic Perfumes for her
            </p>
            <a className="explore__card-link" href="">Explore</a>
          </div>
          <div className="explore__card">
            <p className="explore__card-text" >Header</p>
            <p className="explore__card-text">
              Explore classic, Exotic And <br />
              Authentic Perfumes for her
            </p>
            <a className="explore__card-link" href="">Explore</a>
          </div>
          <div className="explore__card">
            <p className="explore__card-text" >Header</p>
            <p className="explore__card-text">
              Explore classic, Exotic And <br />
              Authentic Perfumes for her
            </p>
            <a className="explore__card-link" href="">Explore</a>
          </div>
        </div>
      </section>
      <section className="new__arrivals" >
        <NewArrivals/>
      </section>
    </div>
  );
};

export default Home;
