import {
  REGISTRY_COMPLETED,
  REGISTRY_ERROR,
  HIDE_ALERT,
  LOGIN_OK,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  LOGOUT_OK,
} from "../../types";

export default function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTRY_COMPLETED:
    case REGISTRY_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case LOGIN_OK:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        authenticated: true,
      };
    case HIDE_ALERT:
      return {
        ...state,
        message: null,
      };
    case AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };
    case LOGOUT_OK:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        authenticated: null,
      };
    default:
      return state;
  }
}
