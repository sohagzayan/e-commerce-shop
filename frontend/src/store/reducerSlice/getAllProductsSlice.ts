import { useAppDispatch } from "../../hocks/hocks";
import { AppDispatch, RootState } from "../store";
import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setEngine } from "crypto";
import { SortsStateType } from "../../util/FilterOption";

export interface sortsType {
  id: number;
  name: string;
  sortName: string;
  value: number;
}

export interface Image {
  publicId: string;
  url: string;
  _id: string;
}

export interface Product {
  viewCount: number;
  deliveryAvailable: string;
  gender: string;
  colorVariant: string[];
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  ratings: number;
  image: Image[];
  category: string;
  stock: number;
  numOfReviews: number;
  reviews: string[];
  createdAt: string;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } =
  productSlice.actions;
export default productSlice.reducer;

/* Thunk Here */
export const fetchAllProduct =
  (
    currentPage: number = 1,
    categoryes: string[] = [],
    priceRange: number[] = [],
    sorts: SortsStateType = {},
    colors: string[] = [],
    sizes: string[] = [],
    keyword: string = ""
  ) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch(fetchProductStart());
    try {
      const url = `/api/v1/products/get?page=${currentPage}`;
      const { data } = await axios.post(url, {
        category: categoryes.length > 0 ? categoryes : "",
        minPrice: priceRange[0] === 0 ? "" : priceRange[0],
        maxPrice: priceRange[1] === 2000 ? "" : priceRange[1],
        sorts: sorts,
        colorVariant: colors,
        sizeVariant: sizes,
        search: keyword,
      });
      // console.log("data", data);
      dispatch(fetchProductSuccess(data));
    } catch (error: any) {
      dispatch(fetchProductFailure(error.response.data.message));
    }
  };

/* Search Action */
export const searchProduct =
  (keyword: string = "") =>
  async (dispatch: Dispatch, getState: any) => {
    // dispatch(setSearchLoading(true));
    try {
      const url = `/api/v1/products/get`;
      const { data } = await axios.post(url, {
        search: keyword,
      });
      // console.log("data", data);
      // dispatch(setSearchProduct(data.products));
      // dispatch(setError(null));
      // dispatch(setSearchLoading(false));
    } catch (error: any) {
      // dispatch(setSearchLoading(false));
      // dispatch(setError(error.response.data.message));
    }
  };

// export const fetchProduct =
//   () => async (dispatch: AppDispatch, getState: RootState) => {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const { data } = await axios.post("/api/v1/products/get");
//       // console.log("data", data);
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       console.log("error", error);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
