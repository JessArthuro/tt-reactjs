import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import RouterContent from "./RouterContent";

function RouterLogin() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <RouterContent />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default RouterLogin;
