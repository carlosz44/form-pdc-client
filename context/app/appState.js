import React, { useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./appReducer";
import {
  SHOW_ALERT,
  HIDE_ALERT,
  UPLOAD_FILE,
  UPLOAD_FILE_OK,
  UPLOAD_FILE_ERROR,
  CREATE_LINK_OK,
  CREAR_ENLACE_ERROR,
  CLEAN_STATE,
  AGREGAR_PASSWORD,
  AGREGAR_DESCARGAS,
} from "../../types";
import clientAxios from "../../config/axios";

const AppState = ({ children }) => {
  const initialState = {
    message_file: null,
    name: "",
    original_name: "",
    loading: null,
    // descargas: 1,
    // password: "",
    autor: null,
    url: "",
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Muestra una alerta
  const showAlert = (msg) => {
    dispatch({
      type: SHOW_ALERT,
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };

  // Sube los archivos al servidor
  const uploadFile = async (formData, fileName) => {
    dispatch({
      type: UPLOAD_FILE,
    });

    try {
      const resultado = await clientAxios.post("/api/uploads", formData);

      dispatch({
        type: UPLOAD_FILE_OK,
        payload: {
          name: resultado.data.uploadedFile,
          original_name: fileName,
        },
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // crea un enlace una vez que se subió el archivo
  const createLink = async () => {
    const data = {
      name: state.name,
      original_name: state.original_name,
      // descargas: state.descargas,
      // password: state.password,
      autor: state.autor,
    };

    try {
      const resultado = await clientAxios.post("/api/links", data);

      dispatch({
        type: CREATE_LINK_OK,
        payload: resultado.data.msg,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cleanState = () => {
    dispatch({
      type: CLEAN_STATE,
    });
  };

  // Agregue el password
  // const agregarPassword = (password) => {
  //   dispatch({
  //     type: AGREGAR_PASSWORD,
  //     payload: password,
  //   });
  // };

  // // agrega un número de descargas
  // const agregarDescargas = (descargas) => {
  //   dispatch({
  //     type: AGREGAR_DESCARGAS,
  //     payload: descargas,
  //   });
  // };

  return (
    <appContext.Provider
      value={{
        message_file: state.message_file,
        name: state.name,
        original_name: state.original_name,
        loading: state.loading,
        // descargas: state.descargas,
        // password: state.password,
        autor: state.autor,
        url: state.url,
        showAlert,
        uploadFile,
        createLink,
        cleanState,
        // agregarPassword,
        // agregarDescargas,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
