import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const newOrderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    orders: {},
    error: null,
  },
  reducers: {
    orderRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    orderRequestSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    orderRequestFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    orderRequestErrorClear(state) {
      state.error = null;
    },
  },
});

export const {
  orderRequestStart,
  orderRequestSuccess,
  orderRequestFailure,
  orderRequestErrorClear,
} = newOrderSlice.actions;
export default newOrderSlice.reducer;

// Thunk

export const createNewOrder = (order: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(orderRequestStart());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);
    dispatch(orderRequestSuccess(data));
  } catch (error: any) {
    dispatch(orderRequestFailure(error.response.data.message));
  }
};

export const clearOrderError = () => async (dispatch: Dispatch) => {
  dispatch(orderRequestErrorClear());
};
