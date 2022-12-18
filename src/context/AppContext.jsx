import { createContext, useReducer } from "react";
import { loginReducer, init } from "./loginReducer";
import { types } from "./types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [authentication, dispatch] = useReducer(loginReducer, {}, init);

  const loginAction = (user, password) => {
    if (user === "admin" && password === "1234") {
      const action = {
        type: types.login,
        payload: user,
        payload2: password,
      };
      localStorage.setItem("SESSION", user);
      dispatch(action);
    } else {
      alert("El usuario y la contraseña son incorrectos.");
    }
  };

  const logoutAction = () => {
    const action = {
      type: types.logout,
      payload: null,
      payload2: null,
    };
    localStorage.removeItem("SESSION");
    dispatch(action);
  };

  return (
    <AppContext.Provider
      value={{ ...authentication, loginAction, logoutAction }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
