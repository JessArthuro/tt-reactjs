import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const preventSubmit = (event) => {
    event.preventDefault();
  };

  const unableToCopy = (event) => {
    event.preventDefault();
    alert("No se puede copiar el dato...");
  };

  const unableToPaste = (event) => {
    event.preventDefault();
    alert("No se puede pegar el dato...");
  };

  return (
    <form
      className="col-12 col-md-10 col-lg-8 mx-auto p-4 border shadow-sm"
      onSubmit={preventSubmit}
    >
      <h2>Inicio de Sesión</h2>
      <div className="mb-3">
        <label htmlFor="InputUser" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="InputUser"
          placeholder="*****"
          onCopy={unableToCopy}
          onPaste={unableToPaste}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="InputPassword" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="InputPassword"
          placeholder="**********"
          onCopy={unableToCopy}
          onPaste={unableToPaste}
        />
        <div id="passwordHelpBlock" className="form-text">
          Su contraseña debe tener entre 8 y 20 caracteres, contener letras y
          números, y no debe contener espacios, caracteres especiales ni emojis.
        </div>
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Iniciar Sesión
      </button> */}
      <Link to="/employees" className="btn btn-primary">
        Acceder
      </Link>
    </form>
  );
}

export default Login;
