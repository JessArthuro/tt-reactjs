import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function PrivateRoutes({ children }) {
  const { loggedin } = useContext(AppContext);
  return loggedin ? children : <Navigate to="/login" />;
}

export default PrivateRoutes;
