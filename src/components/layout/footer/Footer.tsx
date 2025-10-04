"use client";
import React from "react";
import scss from "./Footer.module.scss";
import footertop from "@/assets/image/footertop.svg";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_top}>
            <div className={scss.footer_left}>
              <Image className={scss.footer_img} src={footertop} alt="img" />
              <h3>example@gmail.com</h3>
              <h3>sample@yahoo.com</h3>
            </div>
            <div className={scss.footer_center}>
              <Image className={scss.footer_img} src={footertop} alt="img" />
              <h3>We are on Telegram</h3>
              <h3>@NicoCryptoChannel</h3>
            </div>
            <div className={scss.footer_right}>
              <Image className={scss.footer_img} src={footertop} alt="img" />
              <h3>+1 800 123 456 789</h3>
              <h3>+1 800 123 456 780</h3>
            </div>
          </div>

          <div className={scss.footer_bottom}>
            <div className={scss.footer_icon}>
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaLinkedinIn />
              </Link>
              <Link href="#">
                <CiTwitter />
              </Link>
              <Link href="#">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className={scss.div}></div>
          <div className={scss.footer_nav}>
            <div className={scss.footer_left}>
              <h4>Copyright © 2022 Nazmul Shanto. All Rights Reserved</h4>
            </div>
            <div className={scss.footer__right}>
              <a href="/">Home</a>
              <a href="#popular">All NFTs</a>
              <a href="#info">Team</a>
              <a href="#market">Terms & Co.</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
