import React from "react";
import styles from "@styles/MyAccount.module.scss"

const MyAccount = () => {
    return (
        <div className={styles["super-container"]}>
        <div className={styles["form-container container-father"]}>
            <h1 className={styles["title"]}>Mi cuenta</h1>
            <form action="" className={styles["form"]}>
                <label className={styles["label"]} for="nombres">Nombres</label>
                <p className={styles["text"]} id="nombres">Matthew Alejandro</p>
                <label className={styles["label"]} for="apellidos">Apellidos</label>
                <p className={styles["text"]} id="apellidos">Meneses Villada</p>
                <label className={styles["label"]} for="password">Contraseña</label>
                <p className={styles["text"]} id="password">********</p>
            </form>
            <input className={styles["secondary-button edit-button"]} type="submit" value="Edit" />
        </div>
    </div>
    )
};

export default MyAccount;