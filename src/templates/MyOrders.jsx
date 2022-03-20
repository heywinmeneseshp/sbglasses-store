import React from "react";
import styles from "@styles/MyOrders.module.scss";

const MyOrders = () => {
  return (
    <div >
      <div className={styles["my-order"]}>
        <div className={styles["my-order-container"]}>
          <h2>Mis ordenes</h2>
          <div className={styles["my-order-content"]}>
            <div>
              <p className={styles["date"]}>02.01.2022</p>
              <p className={styles["articles"]}>6 articulos</p>
            </div>
            <div className={styles["order-price"]}>
              <p className={styles["price"]}>$ 990.000</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flecha.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles["my-order-content"]}>
            <div>
              <p className={styles["date"]}>02.01.2022</p>
              <p className={styles["articles"]}>6 articulos</p>
            </div>
            <div className={styles["order-price"]}>
              <p className={styles["price"]}>$ 990.000</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flecha.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles["my-order-content"]}>
            <div>
              <p className={styles["date"]}>02.01.2022</p>
              <p className={styles["articles"]}>6 articulos</p>
            </div>
            <div className={styles["order-price"]}>
              <p className={styles["price"]}>$ 990.000</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flecha.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles["my-order-content"]}>
            <div>
              <p className={styles["date"]}>02.01.2022</p>
              <p className={styles["articles"]}>6 articulos</p>
            </div>
            <div className={styles["order-price"]}>
              <p className={styles["price"]}>$ 990.000</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flecha.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
