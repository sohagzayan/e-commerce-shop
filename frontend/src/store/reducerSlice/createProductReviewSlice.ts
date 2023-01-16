import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

const createProductReviewSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    newReviewStart(state) {
      state.loading = true;
      state.error = null;
    },
    newReviewSuccess(state, action) {
      state.loading = false;
      state.success = action.payload;
    },
    newReviewFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    newReviewReset(state, action) {
      state.success = action.payload;
    },
    newReviewErrorClear(state) {
      state.error = null;
    },
  },
});

export const {
  newReviewStart,
  newReviewSuccess,
  newReviewFailure,
  newReviewReset,
  newReviewErrorClear,
} = createProductReviewSlice.actions;
export default createProductReviewSlice.reducer;

// thunk

export const createNewReview =
  (reviewData: any) => async (dispatch: Dispatch) => {
    try {
      dispatch(newReviewStart());
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.put("/api/v1/review", reviewData, config);
      dispatch(newReviewSuccess(data.success));
    } catch (error: any) {
      dispatch(newReviewFailure(error.response.data.message));
    }
  };

export const createReviewReset = () => async (dispatch: Dispatch) => {
  dispatch(newReviewReset(false));
};
export const createReviewClearError = () => async (dispatch: Dispatch) => {
  dispatch(newReviewErrorClear());
};
