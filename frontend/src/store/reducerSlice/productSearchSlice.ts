import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const productSearchSlice = createSlice({
  name: "productSearch",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductSearchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSearchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductSearchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductSearchStart,
  fetchProductSearchSuccess,
  fetchProductSearchFailure,
} = productSearchSlice.actions;
export default productSearchSlice.reducer;

/* Thunk Here */
export const startSearchProduct =
  (keyword: string = "") =>
  async (dispatch: Dispatch) => {
    dispatch(fetchProductSearchStart());
    try {
      const { data } = await axios.post("/api/v1/products/get", {
        search: keyword,
      });
      console.log(data);
      dispatch(fetchProductSearchSuccess(data.products));
    } catch (error: any) {
      dispatch(fetchProductSearchFailure(error.response.data.message));
    }
  };
