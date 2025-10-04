import React from "react";
import Welcome from "../welcome/Welcome";
import Popular from "../popular/Popular";
import Info from "../info/Info";
import Category from "../category/Category";
import Market from "../market/Market";
import Contact from "../contact/Contact";
const HomePage = () => {
  return (
    <>
      <div id="Welcome">
        <Welcome />
      </div>
      <div id="popular">
        <Popular />
      </div>
      <div id="info">
        <Info />
      </div>
      <div id="category">
        <Category />
      </div>
      <div id="market">
        <Market />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
export default HomePage;
