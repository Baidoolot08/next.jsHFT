import React from "react";
import scss from "./Welcome.module.scss";
import pruj from "../../../assets/image/pruj.png";
import union from "../../../assets/image/welcome.svg";
import eye from "../../../assets/image/eye.svg";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.welcome__global}>
          <div className={scss.welcome__info}>
            <h1>
              Buy, Create & Sell <span>Unique NFTs</span> File.
            </h1>
            <p>
              NFTs are used for digital art and collectibles, GameFi <br />
              projects, metaverses, and more.
            </p>
            <div className={scss.btn}>
              <a href="#popular">
                <button>Explore NFTs</button>
              </a>
              <Image
                className={scss.img3}
                src={pruj}
                alt="NFT illustration"
                priority
              />
            </div>

            <div className={scss.nico}>
              <div className={scss.icon}>
                <Image className={scss.img} src={eye} alt="img" />
                <h2>Nico NFT Marketplace Overview</h2>
              </div>
              <div className={scss.block}>
                <div className={scss.blocks}>
                  <p>World Arts</p>
                  <h3>30.000 +</h3>
                </div>{" "}
                <div className={scss.blocks}>
                  <p>Digital Artists</p>
                  <h3>17.000 +</h3>
                </div>
                <div className={scss.blocks}>
                  <p>Live Auctions</p>
                  <h3>22.000 +</h3>
                </div>
                <div className={scss.blocks}>
                  <p>Products</p>
                  <h3>50.000 +</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.welcome__img}>
            <Image
              className={scss.img1}
              src={union}
              alt="NFT illustration"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
