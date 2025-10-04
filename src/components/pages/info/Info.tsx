import React from "react";
import styles from "./Info.module.scss";
import Image from "next/image";
import coin from "@/assets/image/coin.svg";
import sell from "@/assets/image/Sell.png";
import addNew from "@/assets/image/Add New.svg";
import nft from "@/assets/image/NFT.svg";

const Info = () => {
  return (
    <section className={styles.infoSection}>
      <div className="container">
        <div className={styles.infoContent}>
          <div className={styles.infoTitle}>
            <h1>UNIQUE FILES</h1>
          </div>
          <div className={styles.infoSubtitle}>
            <h2>
              How to <i>Create &amp; Sell</i> Your NFT Files.
            </h2>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoBlockItem}>
              <Image src={coin} alt="coin" />
              <div className={styles.infoBlocktext}>
                <h1>Set Up Your Wallet</h1>
                <p>
                  Connect your wallet to Nico by clicking the wallet icon in the
                  top right corner after you&apos;ve set it up.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={addNew} alt="add new" />
              <div className={styles.infoBlocktext}>
                <h1>Create Unique Collection</h1>
                <p>
                  Set a secondary sales fee and add social links, a description,
                  profile and banner images, and a description.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={nft} alt="nft" />
              <div className={styles.infoBlocktext}>
                <h1>Download NFTs</h1>
                <p>
                  Add a title and description to your work (picture, video,
                  audio, or 3D art), then customize your NFTs with properties.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={sell} alt="sell" />
              <div className={styles.infoBlocktext}>
                <h1>Put Them Up for Sale</h1>
                <p>
                  Auctions, fixed-price listings, and declining-price listings
                  are all options. You decide how you&apos;d like to sell your
                  NFTs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
