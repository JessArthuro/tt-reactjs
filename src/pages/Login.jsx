import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Login() {
  const { loginAction } = useContext(AppContext);
  const navigation = useNavigate();

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      user: formData.get("user"),
      password: formData.get("password"),
    };

    loginAction(data.user, data.password);
    navigation("/", { replace: true });
  };

  const unableToCopy = (event) => {
    event.preventDefault();
    alert("No se puede copiar la información.");
  };

  const unableToPaste = (event) => {
    event.preventDefault();
    alert("No se puede pegar la información.");
  };

  return (
    <section className="container mt-4">
      <form
        className="col-12 col-md-10 col-lg-8 mx-auto p-4 border shadow-sm"
        onSubmit={handleSubmit}
        ref={form}
      >
        <h2>Inicio de Sesión</h2>
        <div className="mb-3">
          <label htmlFor="InputUser" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            name="user"
            className="form-control"
            id="InputUser"
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
            name="password"
            className="form-control"
            id="InputPassword"
            onCopy={unableToCopy}
            onPaste={unableToPaste}
          />
        </div>

        <button className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </section>
  );
}

export default Login;
