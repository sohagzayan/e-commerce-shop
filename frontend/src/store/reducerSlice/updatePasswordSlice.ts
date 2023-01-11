import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const updatePasswordSlice = createSlice({
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

const {
  userPasswordUpdateFailure,
  userPasswordUpdateReset,
  userPasswordUpdateSuccess,
  userPasswordUpdateStart,
  userPasswordUpdateResetError,
} = updatePasswordSlice.actions;

export default updatePasswordSlice.reducer;
//  thunk

export const userPasswordUpdate =
  (passwords: any) => async (dispatch: Dispatch) => {
    try {
      dispatch(userPasswordUpdateStart());
      const url = `/api/v1/password/update`;
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(url, passwords, config);
      dispatch(userPasswordUpdateSuccess(data.success));
      console.log(data);
    } catch (error: any) {
      dispatch(userPasswordUpdateFailure(error.response.data.message));
    }
  };

export const userPasswordUpdateTreeReset = () => async (dispatch: Dispatch) => {
  dispatch(userPasswordUpdateReset());
};
export const userPasswordUpdateTreeResetError =
  () => async (dispatch: Dispatch) => {
    dispatch(userPasswordUpdateResetError(null));
  };
