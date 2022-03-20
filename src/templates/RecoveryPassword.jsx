import React from "react";
import styles from "@styles/RecoveryPassword.module.scss";

const RecoreryPassword = () => {
    return (
    <div className={style["login"]}>
        <div className={style["form-container"]}>
            <img className={style["logo"]} src="./icons/logo-tienda.png" alt="logo"/>
            <h1 className={style["title"]}>Recuperar contraseña</h1>
            <p className={style["subtitle"]}>Escribe el email de tu cuenta para restablecer tu contraseña</p>
            <form action="" className={style["form"]}>     
                <label className={style["label"]} for="password">Correo electrónico</label>
                <input className={style["input input-pass"]} type="text" id="password" placeholder="craken@ejemplo.com"/>
                <input className={style["primary-button login-button"]} type="submit" value="Confirmar"/>
                <a href="">Regresar</a>
            </form>
        </div>
    </div>
    )
}

export default RecoreryPassword;