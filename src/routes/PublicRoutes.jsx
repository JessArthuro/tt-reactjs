import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import RouterContent from "./RouterContent";

function PublicRoutes({ children }) {
  const { loggedin } = useContext(AppContext);
  return loggedin ? <RouterContent /> : children;
}

export default PublicRoutes;
