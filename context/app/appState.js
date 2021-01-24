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
  CLEAN_STATE,
} from "../../types";
import clientAxios from "../../config/axios";

const AppState = ({ children }) => {
  const initialState = {
    message_file: null,
    name: "",
    original_name: "",
    loading: null,
    autor: null,
    url: "",
  };

  // Create dispatch and state
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Show Alert
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

  // Uploads files to server
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

  // Create a link for admin to download the file
  const createLink = async () => {
    const data = {
      name: state.name,
      original_name: state.original_name,
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

  return (
    <appContext.Provider
      value={{
        message_file: state.message_file,
        name: state.name,
        original_name: state.original_name,
        loading: state.loading,
        autor: state.autor,
        url: state.url,
        showAlert,
        uploadFile,
        createLink,
        cleanState,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
