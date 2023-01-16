import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductDetailsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductDetailsErrorClear(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchProductDetailsFailure,
  fetchProductDetailsSuccess,
  fetchProductDetailsStart,
  fetchProductDetailsErrorClear,
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;

/* Thunk */

export const getProductDetails = (id: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchProductDetailsStart());
    const { data } = await axios.get(`/api/v1/product/${id}`);
    console.log(data);
    dispatch(fetchProductDetailsSuccess(data.product));
  } catch (error: any) {
    dispatch(fetchProductDetailsFailure(error.response.data.message));
  }
};

export const getProductDetailsErrorClear = () => async (dispatch: Dispatch) => {
  dispatch(fetchProductDetailsErrorClear());
};
