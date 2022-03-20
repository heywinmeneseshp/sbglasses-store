import React from "react";
import styles from "@styles/AsideLeft.module.scss";

const ItemAside = () => {
  return (
    <div className={styles.item-aside}>
      <div>
        <img
          className={styles.img-aside}
          src="https://placeimg.com/640/480/any?r=0.032824517284979704"
          alt=""
        />
      </div>
      <div className={styles.details-aside}>
        <div className={styles.title-aside}>Refined Steel Table</div>
        <div className={styles.price-aside}>$250</div>

        <form id="form">
          <div className={styles.clasificacion}>
            <input id="radio1" type="radio" name="estrellas" value="5" />
            <label htmlFor="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4" />
            <label htmlFor="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3" />
            <label htmlFor="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2" />
            <label htmlFor="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1" />
            <label htmlFor="radio5">★</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemAside;
