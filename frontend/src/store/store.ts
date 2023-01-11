import userProfileUpdateSlice, {
  userProfileUpdate,
} from "./reducerSlice/userProfileUpdateSlice";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { combineReducers } from "redux";
import productsSlice from "./reducerSlice/getAllProductsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./reducerSlice/authSlice";
import getProductDetailsSlice from "./reducerSlice/getProductDetailsSlice";
import productSearchSlice from "./reducerSlice/productSearchSlice";
import forgotPasswordSlice from "./reducerSlice/forgotPasswordSlice";
// import { productSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: authSlice,
    productDetails: getProductDetailsSlice,
    searchProduct: productSearchSlice,
    updateProfile: userProfileUpdateSlice,
    updatePassword: forgotPasswordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
