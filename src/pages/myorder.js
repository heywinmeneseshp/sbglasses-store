import Head from 'next/head';
import React from "react";
import styles from "@styles/MyOrder.module.scss";

const MyOrder = () => {
  return (
    <>
    <Head>
      <title>Checkout</title>
    </Head>
    <div>
      <div className={styles["my-order"]}>
        <div className={styles["my-order-container"]}>
          <h2 className={styles["h2"]}>Mi orden</h2>
          <div className={styles["my-order-content"]}>
            <div>
              <p className={styles["date"]}>02.01.2022</p>
              <p className={styles["articles"]}>6 articulos</p>
            </div>
            <p className={styles["price"]}>$ 990.000</p>
          </div>

          <div className={styles["item"]}>
            <img
              src="https://cf.shopee.com.co/file/016c14beda9f4cf14e959345347f4c60"
              alt=""
            />
            <p>Bike</p>
            <p>$ 120.000</p>
          </div>

          <div className={styles["item"]}>
            <img
              src="https://cf.shopee.com.co/file/016c14beda9f4cf14e959345347f4c60"
              alt=""
            />
            <p>Bike</p>
            <p>$ 120.000</p>
          </div>

          <div className={styles["item"]}>
            <img
              src="https://cf.shopee.com.co/file/016c14beda9f4cf14e959345347f4c60"
              alt=""
            />
            <p>Bike</p>
            <p>$ 120.000</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyOrder;