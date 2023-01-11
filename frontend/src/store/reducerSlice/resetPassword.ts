import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState: {
    loading: false,
    success: "",
    error: null,
  },
  reducers: {
    userPasswordResetStart(state) {
      state.loading = true;
      state.error = null;
    },
    userPasswordResetSuccess(state, action) {
      state.loading = false;
      state.success = action.payload;
    },
    userPasswordResetFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    userPasswordResetResetError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userPasswordResetStart,
  userPasswordResetSuccess,
  userPasswordResetFailure,
  userPasswordResetResetError,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;

//  Thunk

export const resetPassword =
  (token: any, passwords: any) => async (dispatch: Dispatch) => {
    try {
      dispatch(userPasswordResetStart());
      const url = `/api/v1/password/reset/${token}`;
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(url, passwords, config);
      dispatch(userPasswordResetSuccess(data.success));
    } catch (error: any) {
      dispatch(userPasswordResetFailure(error.response.data.message));
    }
  };

export const resetPasswordClearError = () => async (dispatch: Dispatch) => {
  dispatch(userPasswordResetResetError(null));
};
