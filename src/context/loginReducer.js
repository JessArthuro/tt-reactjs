import { types } from "./types";

// Esta es una funcion pura que nos permite modificar el estado, es parecido a usar useState.
export const loginReducer = (state, action) => {
  // Evaluamos el tipo de accion.
  switch (action.type) {
    case types.login:
      return {
        loggedin: true,
        user: action.payload,
        password: action.payload2,
      };

    case types.logout:
      return {
        loggedin: false,
        user: null,
        password: null,
      };

    default:
      return state;
  }
};

// Esta funcion va permitir modificar el valor inicial a traves del localStorage.
export const init = () => {
  const user = localStorage.getItem("SESSION");
  return {
    // Sino existe ningun tipo de sesion el valor sera false, caso contrario existira una y devolvera true.
    loggedin: !!user,
    user: user,
    password: user,
  };
};
