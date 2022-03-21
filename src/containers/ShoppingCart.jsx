import React, { useContext, useState } from "react";
import Link  from 'next/link';
import AppContext from "@context/AppContext";
import ItemCart from "@components/ItemCart";
import styles from "@styles/ShoppingCart.module.scss";

const ShoppingCart = () => {
  const { state, openWindows } = useContext(AppContext);
 
  const sumTotal = () => {
    const reducer = (acumulador, valorActual) => acumulador + valorActual.price;
    const sum = state.cart.reduce(reducer, 0)
    return sum;
  }
  return (
    <div className={styles["containter-cart"]}>
      <div className={styles["my-order-cart"]}>
        <div className={styles['my-order-container-cart']}>
          <div className={styles['container-arrow-cart']}>
            <img
              className={styles['arrow-cart']}
              src="https://cdn-icons-png.flaticon.com/512/120/120872.png"
              alt=""
              onClick={() => { 
                openWindows()
              }}
            />
            <h2 className={styles['h2-cart']}>Shopping cart</h2>
          </div>

          <div className={styles['scroll-container-cart']}>
          {state.cart.map( (item, index ) => 
            <ItemCart product={item} key={index} indexValue={index}/> )}
          </div>

          <div className={styles['total-container-cart']}>
     
            <p className={styles['price-cart']}>Total</p>
            <p className={styles['price-cart']}>${sumTotal()}</p>

          </div>
          <Link className={styles['checkout-button']} href="/myorder">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
