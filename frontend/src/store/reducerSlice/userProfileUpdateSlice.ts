import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const userProfileUpdateSlice = createSlice({
  name: "updateProfile",
  initialState: {
    loading: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    userProfileUpdateStart(state) {
      state.loading = true;
      state.error = null;
    },
    userProfileUpdateSuccess(state, action) {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    userProfileUpdateFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    userProfileUpdateReset(state) {
      state.loading = false;
      state.isUpdated = false;
    },
    userProfileUpdateResetError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  userProfileUpdateStart,
  userProfileUpdateSuccess,
  userProfileUpdateFailure,
  userProfileUpdateReset,
  userProfileUpdateResetError,
} = userProfileUpdateSlice.actions;
export default userProfileUpdateSlice.reducer;

// Thunk

export const userProfileUpdate =
  (userData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch(userProfileUpdateStart());
      const url = `/api/v1/me/update`;
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(url, userData, config);
      dispatch(userProfileUpdateSuccess(data.success));
      console.log(data);
    } catch (error: any) {
      dispatch(userProfileUpdateFailure(error.response.data.message));
    }
  };

// Reset Update

export const profileUpdateReset = () => async (dispatch: Dispatch) => {
  dispatch(userProfileUpdateReset());
};

export const profileUpdateResetError = () => async (dispatch: Dispatch) => {
  dispatch(userProfileUpdateResetError(null));
};
