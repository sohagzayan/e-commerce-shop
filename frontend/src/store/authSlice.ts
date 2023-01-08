import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  loading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    removeUser(state, action) {
      state.isAuthenticated = false;
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError, removeUser } = authSlice.actions;
export default authSlice.reducer;

/* Thunk  */

export const login =
  (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
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

      dispatch(setLoading(false));
      dispatch(setUser(data.user));
      console.log(data);
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data.message));
    }
  };

export const loadUser = () => async (dispatch: Dispatch, getState: any) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/api/v1/me");
    dispatch(setLoading(false));
    dispatch(setUser(data.user));
    // console.log(data);
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setError(error.response.data.message));
  }
};

export const logOut = () => async (dispatch: Dispatch) => {
  try {
    await axios.get("/api/v1/logout");
    dispatch(setLoading(false));
    dispatch(removeUser(null));
    // console.log(data);
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setError(error.response.data.message));
  }
};
