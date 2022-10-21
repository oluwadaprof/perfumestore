import React from "react";
import BestSellers from "../../components/bestsellers/BestSellers";

import NewArrivals from "../../components/newarrivals/NewArrivals";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="main-page">
       
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
        <BestSellers/>
      </section>
    </div>
  );
};

export default Home;
