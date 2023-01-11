import { createSlice } from "@reduxjs/toolkit";

const forgotPasswordSlice = createSlice({
  name: "password",
  initialState: {
    loading: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    userPasswordUpdateStart(state) {
      state.loading = true;
      state.error = null;
    },
    userPasswordUpdateSuccess(state, action) {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    userPasswordUpdateFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    userPasswordUpdateReset(state) {
      state.loading = false;
      state.isUpdated = false;
    },
    userPasswordUpdateResetError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//  thunk
