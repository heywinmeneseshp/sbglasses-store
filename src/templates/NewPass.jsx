import React from "react"

const NewPass = () => {
    return (
    <div className="login">
        <div className="form-container">
            <img className="logo" src="./icons/logo-tienda.png" alt="logo"/>
            <h1 className="title">Crear nueva contraseña</h1>
            <p className="subtitle">Introduce una nueva contraseña para tu cuenta</p>
            <form action="" className="form">
                <label className="label" for="password">Contraseña</label>
                <input className="input input-pass" type="password" id="password" placeholder="********"/>
                <label className="label" for="new-password">Repetir contraseña</label>
                <input className="input input-pass" type="password" id="new-password" placeholder="********"/>
                <input className="primary-button login-button" type="submit" value="Confirmar" />
            </form>
        </div>
    </div>
    )
}

export default NewPass;