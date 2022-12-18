import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const { logoutAction } = useContext(AppContext);
  const navigation = useNavigate();

  // Uso de replace del useNavigate para inhabilitar el boton volver del navegador.
  const logOut = () => {
    logoutAction();
    navigation("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Technical Test
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/employees" className="nav-link">
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/upload" className="nav-link">
                Upload
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-primary ms-lg-3" onClick={logOut}>
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
