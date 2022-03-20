import React, { useContext } from "react";

import shoppingCart from "@icons/shopping_cart.png";
import AppContext from "../context/AppContext";
import styles from "@styles/Cards.module.scss";

const Cards = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  const productCounter = item => {
    if (state.cart.includes(item)) {
      const array = state.cart.filter(element => element.id == item.id )
      return array.length
    } else {
      return "+"
    }
  }

  const verifyItem = (item) => {
    if (state.cart.includes(item)) {
      return "circle-card-2";
    } else {
      return "circle-card";
    }
  };

  return (
    <div className={styles.product-card}>
      <img
        className={styles.product-img}
        src={product.images[0]}
        alt={product.title}
      />
      <div className={styles.product-info}>
        <div className={styles.info}>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <div className={styles.cart-container-card} onClick={() => handleClick(product)}>
          <figure >
            <img
              className={styles.logo-carrito}
              src={shoppingCart}
              alt="logo-carrito"
            />
          </figure>
          <div className={styles.verifyItem(product)}>{productCounter(product)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
