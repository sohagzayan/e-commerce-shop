import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const getSingleUserDetailsSlice = createSlice({
  name: "singleUser",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {
    startFetchUserDetails(state) {
      state.loading = true;
      state.error = null;
    },
    FetchUserDetailsSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    etchUserDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    etchUserDetailsErrorClear(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  startFetchUserDetails,
  FetchUserDetailsSuccess,
  etchUserDetailsFailure,
  etchUserDetailsErrorClear,
} = getSingleUserDetailsSlice.actions;
export default getSingleUserDetailsSlice.reducer;

// Thunk

export const getUserDetails = (id: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(startFetchUserDetails());
    const { data } = await axios.get(`/api/v1/user/${id}`);
    console.log(data);
    dispatch(FetchUserDetailsSuccess(data.user));
  } catch (error: any) {
    dispatch(etchUserDetailsFailure(error.response.data.message));
  }
};
