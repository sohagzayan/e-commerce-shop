import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const forgotPasswordSlice = createSlice({
  name: "forgot",
  initialState: {
    loading: false,
    message: "",
    error: null,
  },
  reducers: {
    userPasswordForgotStart(state) {
      state.loading = true;
      state.error = null;
    },
    userPasswordForgotSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    userPasswordForgotFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    userPasswordForgotResetError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userPasswordForgotStart,
  userPasswordForgotSuccess,
  userPasswordForgotFailure,
  userPasswordForgotResetError,
} = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;

// Thunk

export const forgotPassword = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(userPasswordForgotStart());
    const url = `/api/v1/password/forgot`;
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(url, email, config);
    dispatch(userPasswordForgotSuccess(data.message));
  } catch (error: any) {
    dispatch(userPasswordForgotFailure(error.response.data.message));
  }
};
