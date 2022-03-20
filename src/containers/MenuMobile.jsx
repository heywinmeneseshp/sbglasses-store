import React from "react";
import styles from "@styles/MenuMobile.module.scss";


const MenuMobile = () => {
  return (
      <div className={styles.mobile-menu}>
        <div>
          <ul>
            <li>
              <a href="">Categorias</a>
            </li>
            <li>
              <a href="">Todas</a>
            </li>
            <li>
              <a href="">Vintage</a>
            </li>
            <li>
              <a href="">Cat</a>
            </li>
            <li>
              <a href="">Aviador</a>
            </li>
            <li>
              <a href="">Clásica</a>
            </li>
            <li>
              <a href="">Lentes de Sol</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">Mi orden</a>
            </li>
            <li>
              <a href="">Mi cuenta</a>
            </li>
          </ul>
        </div>

        <ul>
          <li>
            <a className={styles.email-menu-mobile} href="">
              platzi@heywin.com.co
            </a>
          </li>
          <li>
            <a className={styles.sing-out} href="">
              Mi cuenta
            </a>
          </li>
        </ul>
      </div>
  );
};

export default MenuMobile;
