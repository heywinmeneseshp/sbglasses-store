import React from "react";
import ProductList from "@containers/ProductList";
import SearchBar from "@containers/SearchBar";
import AsideLeft from "@containers/AsideLeft";
import styles from "@styles/Home.module.scss";

const Inicio = () => {
  return (
    <section className={styles["super-home"]}>
      <section className={styles["home-container"]}>
        <div className={styles["one"]}>
          <SearchBar />
        </div>
        <div className={styles["two"]}>
          <AsideLeft className={styles["four"]}/>
          <ProductList className={styles["three"]} />
        </div>
      </section>
    </section>
  );
};

export default Inicio;
