import axios from "axios";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConsrants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      {
        email,
        password,
      },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(`/api/v1/register`, userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`api/v1/me`);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// LOGOUT
export const logOut = () => async (dispatch) => {
  try {
    await axios.get(`api/v1/logout`);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};
