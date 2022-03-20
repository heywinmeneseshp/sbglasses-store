import React from "react";
import styles from "@styles/MyOrder.module.scss"

const MyOrder = () => {
  return (
    <div>
      <div className={style["my-order"]}>
        <div className={style["my-order-container"]}>
          <h2>Mi orden</h2>
          <div className={style["my-order-content"]}>
            <div>
              <p className={style["date"]}>02.01.2022</p>
              <p className={style["articles"]}>6 articulos</p>
            </div>
            <p className={style["price"]}>$ 990.000</p>
          </div>

          <div className={style["item"]}>
            <img
              src="https://cf.shopee.com.co/file/016c14beda9f4cf14e959345347f4c60"
              alt=""
            />
            <p>Bike</p>
            <p>$ 120.000</p>
          </div>

          <div className={style["item"]}>
            <img
              src="https://cf.shopee.com.co/file/016c14beda9f4cf14e959345347f4c60"
              alt=""
            />
            <p>Bike</p>
            <p>$ 120.000</p>
          </div>

          <div className={style["item"]}>
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
  );
};

export default MyOrder;