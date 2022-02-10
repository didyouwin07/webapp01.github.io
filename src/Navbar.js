import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MobileStoreButton from "react-mobile-store-button";
import "./Navbar.css";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const getHomePageDetails = gql`
  {
    HomePageDetails(id: 1) {
      title
      content
    }
  }
`;

const Navbar = (): any => {
  const { loading, error, data } = useQuery(getHomePageDetails);
  if (error) return <p>Error </p>;
  if (loading) return <p>Loading...</p>;
  console.log(data.HomePageDetails.title);
  return (
    <nav data-tesid="nav" className="navbar">
      <div className="logo">
        <img src="/Cat-N-Dog-Logo copy.png" />
      </div>
      <div className="highlight-text">
        <p>{data.HomePageDetails.title}</p>
      </div>
      <div className="child-text">{data.HomePageDetails.content}</div>
      <div className="buttons">
        <MobileStoreButton store="ios" url="/" className="ios-button" />
        <MobileStoreButton store="android" url="/" />
      </div>
    </nav>
  );
};

export default Navbar;
