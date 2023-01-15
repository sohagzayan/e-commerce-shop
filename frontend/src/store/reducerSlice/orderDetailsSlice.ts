import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    loading: false,
    order: {},
    error: null,
  },
  reducers: {
    myOrderDetailsRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    myOrderDetailsRequestSuccess(state, action) {
      state.loading = false;
      state.order = action.payload;
    },
    myOrderDetailsRequestFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    myOrderDetailsRequestErrorClear(state) {
      state.error = null;
    },
  },
});

export const {
  myOrderDetailsRequestStart,
  myOrderDetailsRequestSuccess,
  myOrderDetailsRequestFailure,
  myOrderDetailsRequestErrorClear,
} = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;

export const getMyOrder = (id: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(myOrderDetailsRequestStart());
    const { data } = await axios.get(`/api/v1/order/${id}`);
    dispatch(myOrderDetailsRequestSuccess(data.orders));
  } catch (error: any) {
    dispatch(myOrderDetailsRequestFailure(error.response.data.message));
  }
};

export const clearOrderDetailsError = () => async (dispatch: Dispatch) => {
  dispatch(myOrderDetailsRequestErrorClear());
};
