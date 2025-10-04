"use client";
import React, { useEffect, useState } from "react";
import scss from "./Market.module.scss";
import Image from "next/image";
import zig from "@/assets/image/zikzag.svg";
import trend1 from "@/assets/image/trending.svg";
import trend2 from "@/assets/image/voe.svg";
import trend3 from "@/assets/image/sae.svg";

const Market = () => {
  const slides = [
    {
      id: 1,
      image: trend2,
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
    {
      id: 2,
      image: trend3,
      date: "April 25, 2022",
      title: "Crypto Art is Taking Over the World",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={scss.trending}>
      <div className="container">
        <Image src={zig} alt="img" />
        <div className={scss.content}>
          {/* Левый блок */}
          <div className={scss.content_left}>
            <Image src={trend1} alt="img" />
            <h1>
              <span>Trending</span> Crypto <br /> Market News
            </h1>
            <p>
              Set a secondary sales fee and add social links, a <br />
              description, profile and banner images, and a <br />
              description.
            </p>
            <a href="#products">
              <button>Explore NFTs</button>
            </a>
          </div>

          <div className={scss.content_right}>
            <div
              key={slides[index].id}
              className={scss.content_right_card}
              style={{
                transition: "all 0.6s ease-in-out",
                opacity: 1,
              }}
            >
              <Image src={slides[index].image} alt="img" />
              <p>{slides[index].date}</p>
              <h2>{slides[index].title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
