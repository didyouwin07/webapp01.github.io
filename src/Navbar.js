import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MobileStoreButton from "react-mobile-store-button";
import "./Navbar.css";
import React from "react";

const Navbar = (): any => {
  return (
    <nav data-tesid="nav" className="navbar">
      <div className="logo">
        <img src="/Cat-N-Dog-Logo copy.png" />
      </div>
      <div className="highlight-text">
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="child-text">
        Lorem ipsum has been the industry's standard dummy text ever since the
        1550s, when an unknown printer took a gallery of type and scrambled it
        to make a type specimen book.
      </div>
      <div className="buttons">
        <MobileStoreButton store="ios" url="/" className="ios-button" />
        <MobileStoreButton store="android" url="/" />
      </div>
    </nav>
  );
};

export default Navbar;
