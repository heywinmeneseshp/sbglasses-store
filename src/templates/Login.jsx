import React, { useRef } from "react";
import logo from "@logos/logoTienda.png";
import styles from "@styles/Login.module.scss";

const Login = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form.current);
        const data = {
            username: formData.get("email"),
            password: formData.get("password"),
        }
        console.log(data);
    }

    return (
    <div className={styles["login"]}>
        <div className={styles["form-container container-father"]}>
            <div className={styles["form-container container-son"]}>
                <img className={styles["logo"]} src={logo} alt="logo"/>
                <form action="" className={styles["form"]} ref={form}>
                    <label className={styles["label"]} htmlFor="email">Correo electrónico</label>
                    <input className={styles["input input-email"]} type="text" name="email" placeholder="ejemplo@craken.com.co"/>
                    <label className={styles["label"]} htmlFor="password">Contraseña</label>
                    <input className={styles["input input-pass"]} type="password" name="password" placeholder="********"/>
                    <button className={styles["login-button"]}  onClick={handleSubmit}>
                        Log in
                    </button>
                    <a href="">¿Olvidaste tu contraseña?</a>
                </form>
            </div>
            <button className={styles["secondary-button singup-button"]} type="submit" >
            Sing up
            </button>
        </div>
    </div>
    )
}

export default Login;