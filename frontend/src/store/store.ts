import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { combineReducers } from "redux";
import productsSlice from "./productsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { productSlice } from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
