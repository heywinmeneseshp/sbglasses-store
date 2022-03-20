import React from "react";
import ItemAside from "@components/ItemAside"
import styles from "@styles/AsideLeft.module.scss";

const AsideLeft = () => {
 
  return (
    <div className={styles.containter-aside-left}>
      <div className={styles.filter-container-aside}>
        <h3 className={styles.item-title-aside}>Filtrar por precio</h3>
      </div>
      <div>
        <h3 className={styles.item-title-aside}>Lo mas vendido</h3>
        <ItemAside/>
        <ItemAside/>
        <ItemAside/>
        <ItemAside/>
      </div>
    </div>
  );
};

export default AsideLeft;
