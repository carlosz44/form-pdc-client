import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRY_COMPLETED,
  REGISTRY_ERROR,
  HIDE_ALERT,
  LOGIN_OK,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  LOGOUT_OK,
} from "../../types";

import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthState = ({ children }) => {
  // Initial State
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
    authenticated: null,
    user: null,
    message: null,
    // loading: null,
  };

  // Define Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user form
  const registerUser = async (datos) => {
    try {
      const respuesta = await clientAxios.post("/api/users", datos);
      dispatch({
        type: REGISTRY_COMPLETED,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: REGISTRY_ERROR,
        payload: error.response.data.msg,
      });
    }
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };

  // // Admin Login
  const loginAdmin = async (datos) => {
    try {
      const respuesta = await clientAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_OK,
        payload: respuesta.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };

  // Authenticated user based on JWT
  const authenticatedUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const respuesta = await clientAxios.get("/api/auth");
      if (respuesta.data.user) {
        dispatch({
          type: AUTHENTICATED_USER,
          payload: respuesta.data.user,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // Cerrar la sesión
  const logOut = () => {
    dispatch({
      type: LOGOUT_OK,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        //   cargando: state.cargando,
        registerUser,
        loginAdmin,
        authenticatedUser,
        logOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
