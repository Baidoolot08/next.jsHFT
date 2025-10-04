import React from "react";
import scss from "./Category.module.scss";
import Image from "next/image";
import category1 from "../../../assets/image/category1.svg";
import category2 from "../../../assets/image/category2.svg";
import category3 from "../../../assets/image/category3.svg";
import category4 from "../../../assets/image/category4.svg";
const Category = () => {
  return (
    <div className={scss.Category}>
      <div className="container">
        <div className={scss.category}>
          <h1>
            <span>Browse by</span> Category
          </h1>
          <p>
            Set a secondary sales fee and add social links, a <br />{" "}
            description, profile and banner images, and a description.
          </p>
          <div className={scss.top}>
            <Image src={category1} alt="img" />
            <Image src={category2} alt="img" />
          </div>
          <div className={scss.bot}>
            <Image src={category3} alt="img" />
            <Image src={category4} alt="img" />
          </div>
          <button>Explore NFTs Category</button>
        </div>
      </div>
    </div>
  );
};
export default Category;
