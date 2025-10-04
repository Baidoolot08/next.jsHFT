import React from "react";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.header}>
          <h1>KNFT.</h1>
          <div className={scss.header__center}>
            <a href="#Welcome">Home</a>
            <a href="#popular">All NFTs</a>
            <a href="#info">Team</a>
            <a href="#mark">Terms & Co.</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact">
            <button>Get in Touch</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
