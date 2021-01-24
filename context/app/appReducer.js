import {
  SHOW_ALERT,
  HIDE_ALERT,
  UPLOAD_FILE,
  UPLOAD_FILE_OK,
  UPLOAD_FILE_ERROR,
  CREATE_LINK_OK,
  CLEAN_STATE,
} from "../../types";

export default function AppReducer(state, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message_file: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        message_file: null,
      };
    case UPLOAD_FILE:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_FILE_OK:
      return {
        ...state,
        name: action.payload.name,
        original_name: action.payload.original_name,
        loading: null,
      };
    case UPLOAD_FILE_ERROR:
      return {
        ...state,
        message_file: action.payload,
        loading: null,
      };
    case CREATE_LINK_OK:
      return {
        ...state,
        url: action.payload,
      };
    case CLEAN_STATE:
      return {
        ...state,
        message_file: null,
        name: "",
        original_name: "",
        loading: null,
        autor: null,
        url: "",
      };
    default:
      return state;
  }
}
