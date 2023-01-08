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

interface ProductData {
  data: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductData = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;

/* Thunk Here */
export const fetchProduct =
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
    dispatch(setLoading(true));
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
      dispatch(setProducts(data));
      dispatch(setError(null));
      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data.message));
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
