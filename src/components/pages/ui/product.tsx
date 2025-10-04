"use client";

import React, { useState } from "react";
import styles from "./product.module.scss";
import Image from "next/image";

import ethereum from "../../../assets/image/Ethereum.png";
import lightstar from "../../../assets/image/lightstar.png";
import darkstar from "../../../assets/image/darkstar.png";

import { FaHeart } from "react-icons/fa";

export interface ProductItem {
  id: string | number;
  image: string;
  title: string;
  category: string;
  rating: number;
  price: number;
}

interface CardProps {
  el: ProductItem[];
}

const Product = ({ el }: CardProps) => {
  const [liked, setLiked] = useState<Record<number | string, boolean>>({});

  const toggleLike = (id: number | string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.cardsContainer}>
      {Array.isArray(el) && el.length > 0 ? (
        el.map((item) => (
          <div key={item.id} className={styles.cardId}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.cardTitle}>
                <h1>{item.title}</h1>
                <div className={styles.title}>
                  <Image src={ethereum} alt="ethereum" width={16} height={16} />
                  <h2>{item.price}</h2>
                </div>
              </div>
              <div className={styles.cardFooter}>
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={i < item.rating ? lightstar : darkstar}
                    alt="star"
                    width={18}
                    height={18}
                  />
                ))}
              </div>
              <div
                className={styles.cardFavorite}
                onClick={() => toggleLike(item.id)}
              >
                <FaHeart
                  style={{
                    color: liked[item.id]
                      ? "rgb(255, 90, 0)"
                      : "rgba(255,255,255,0.66)",
                    cursor: "pointer",
                  }}
                />
              </div>

              <button className={styles.cardButton}>Buy Now</button>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Product;
