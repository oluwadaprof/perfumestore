import React from "react";
import "./productview.scss";

const ProductView = () => {
  return (
    <div className="productview">
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
  );
};

export default ProductView;
