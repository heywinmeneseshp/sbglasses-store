import React from "react";
import styles from "@styles/MenuDesktop.module.scss";

const MenuDesktop = () => {
  return (
      <div className={styles['desktop-menu']}>
        <ul>
          <li>
            <a className={styles.tittle} href="">
              Mis ordenes
            </a>
          </li>
          <li>
            <a href="">Mi cuenta</a>
          </li>
          <li>
            <a href="">Cerrar</a>
          </li>
        </ul>
      </div>
  );
};

export default MenuDesktop;