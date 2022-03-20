import React from "react";
import styles from "@styles/EmailValidation.module.scss";

const EmailValidation = () => {
  return (
    <div className={styles["EmailValidation"]}>
      <div className={styles["form-container-email-validation"]}>
        <img className={styles["logo-email-validation"]} src="./icons/logo-tienda.png" alt="logo" />
        <h1 className={styles["title-email-validation"]}>El email ha sido enviado!</h1>
        <p className={styles["subtitle-email-validation"]}>
          Por favor revisa tu email para restablecer tu contraseña
        </p>
        <div className={styles["logo-email-email-validation"]}>
          <img src="./icons/email-logo.png" alt="logo-email" />
        </div>
        <input
          className={styles["login-button"]}
          type="submit"
          value="Login"
        />
        <p className={styles["resend-email-validation"]}>
          <span>¿No ha recibido ningún correo?</span>
          <a href="/">Reenviar</a>
        </p>
      </div>
    </div>
  );
};

export default EmailValidation;