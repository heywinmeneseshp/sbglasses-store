import React from "react";
import styles from "@styles/MyAccountEdit.module.scss";

const MyAccountEdit = () => {
  return (
    <div className={style["super-container"]}>
      <div className={style["form-container container-father"]}>
        <h1 className={style["title"]}>Mi cuenta</h1>
        <form action="" className={style["form"]}>
          <label className={style["label"]} for="nombres">
            Nombres
          </label>
          <p className={style["text"]} id="nombres">
            Matthew Alejandro
          </p>
          <label className={style["label"]} for="apellidos">
            Apellidos
          </label>
          <p className={style["text"]} id="apellidos">
            Meneses Villada
          </p>
          <label className={style["label"]} for="password">
            Contraseña
          </label>
          <p className={style["text"]} id="password">
            ********
          </p>
        </form>
        <input className={style["primary-button edit-button"]} type="submit" value="Edit" />
      </div>
    </div>
  );
};

export default MyAccountEdit;
