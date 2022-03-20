import React from "react";
import styles from "@styles/Order.module.scss";

const Order = () => {
  return (
    <div className={styles.order-container}>
      <p id="ordenar">Ordenar:</p>
      <p>Más relevante </p>
      <p className={styles.flecha}>▼</p>
    </div>
  );
};

export default Order;
