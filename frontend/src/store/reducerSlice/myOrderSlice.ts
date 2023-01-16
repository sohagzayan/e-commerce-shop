import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const myOrderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    orders: [],
    error: null,
  },
  reducers: {
    myOrderRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    myOrderRequestSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    myOrderRequestFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    myOrderRequestErrorClear(state) {
      state.error = null;
    },
  },
});

export const {
  myOrderRequestStart,
  myOrderRequestSuccess,
  myOrderRequestFailure,
  myOrderRequestErrorClear,
} = myOrderSlice.actions;
export default myOrderSlice.reducer;

export const getMyOrder = () => async (dispatch: Dispatch) => {
  try {
    dispatch(myOrderRequestStart());
    const { data } = await axios.get("/api/v1/orders/me");
    dispatch(myOrderRequestSuccess(data.orders));
  } catch (error: any) {
    dispatch(myOrderRequestFailure(error.response.data.message));
  }
};

export const clearMyOrderError = () => async (dispatch: Dispatch) => {
  dispatch(myOrderRequestErrorClear());
};
