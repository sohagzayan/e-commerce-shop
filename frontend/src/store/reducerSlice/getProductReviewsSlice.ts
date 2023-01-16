import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const getProductReviewsSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    reviews: [],
    error: null,
  },
  reducers: {
    StartRequestGetAllReviews(state) {
      state.loading = true;
      state.error = null;
    },
    SuccessRequestGetAllReviews(state, action) {
      state.loading = false;
      state.reviews = action.payload;
    },
    FailureRequestGetAllReviews(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    RequestGetAllReviewsErrorClear(state) {
      state.error = null;
    },
  },
});

// thunk

export const {
  StartRequestGetAllReviews,
  SuccessRequestGetAllReviews,
  FailureRequestGetAllReviews,
  RequestGetAllReviewsErrorClear,
} = getProductReviewsSlice.actions;
export default getProductReviewsSlice.reducer;

export const getAllProductReview = (id: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(StartRequestGetAllReviews());
    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);
    dispatch(SuccessRequestGetAllReviews(data.reviews));
  } catch (error: any) {
    dispatch(FailureRequestGetAllReviews(error.response.data.message));
  }
};
