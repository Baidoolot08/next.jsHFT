"use client";
import React, { useEffect, useState } from "react";
import styles from "./Popular.module.scss";
import Image from "next/image";
import active from "@/assets/image/Union.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchNfts } from "@/components/pages/redux/Slice";
import { AppDispatch, RootState } from "@/components/pages/redux/store";
import Product, { ProductItem } from "../ui/product";

const Popular = () => {
  const [selected, setSelected] = useState("All");
  const categories = ["All", "Hape prime", "Lazy Lions", "Peaceful ape"];

  const products = useSelector(
    (state: RootState) => state.product.items
  ) as ProductItem[];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNfts());
  }, [dispatch]);

  const filteredProducts =
    selected === "All"
      ? products
      : products.filter((el) => el.category === selected);

  return (
    <section className={styles.popularId}>
      <div className="container">
        <div className={styles.popular}>
          <h1>
            <i>Most Popular</i> NFTs
          </h1>
          <div className={styles.sort}>
            {categories.map((el) => (
              <div
                key={el}
                className={`${styles.item} ${
                  selected === el ? styles.active : ""
                }`}
                onClick={() => setSelected(el)}
              >
                {el}
                {selected === el && (
                  <span className={styles.bgImg}>
                    <Image src={active} alt="active" width={20} height={20} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <Product el={filteredProducts} />
        <div className={styles.popularAction}>
          <button>Explore All NFTs</button>
        </div>
      </div>
    </section>
  );
};

export default Popular;
