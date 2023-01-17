import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  loading: true,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    requestUser(state) {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    requestUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    requestUserLogOut(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = action.payload;
      state.error = null;
    },
    requestUserFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    requestUserClearError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  requestUser,
  requestUserSuccess,
  requestUserFailure,
  requestUserClearError,
  requestUserLogOut,
} = authSlice.actions;
export default authSlice.reducer;

/* Thunk  */

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(requestUser());
      const url = `/api/v1/login`;
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        url,
        {
          email,
          password,
        },
        config
      );

      dispatch(requestUserSuccess(data.user));
      console.log(data);
    } catch (error: any) {
      dispatch(requestUserFailure(error.response.data.message));
    }
  };

export const register = (userData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(requestUser());
    const url = `/api/v1/register`;
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(url, userData, config);
    dispatch(requestUserSuccess(data.user));
    console.log(data);
  } catch (error: any) {
    dispatch(requestUserFailure(error.response.data.message));
  }
};

export const clearError = () => async (dispatch: Dispatch) => {
  dispatch(requestUserClearError(null));
};

export const loadUser = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch(requestUser());
    const { data } = await axios.get("/api/v1/me");
    dispatch(requestUserSuccess(data.user));
    // console.log(data);
  } catch (error: any) {
    dispatch(requestUserFailure(error.response.data.message));
  }
};

export const logOut = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestUser());
    await axios.get("/api/v1/logout");
    dispatch(requestUserLogOut(null));
    // console.log(data);
  } catch (error: any) {
    dispatch(requestUserClearError(error.response.data.message));
  }
};
