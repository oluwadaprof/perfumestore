import React from "react";
import TopNav from "../../components/topnav/TopNav";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <nav className="top__nav">
        <TopNav/>   
      </nav>
    </div>
  );
};

export default Home;
