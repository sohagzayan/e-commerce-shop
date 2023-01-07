import { createAction } from "@reduxjs/toolkit";

export const allProductRequest = createAction("all_product_request");
export const ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS";
export const ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

export const SEARCH_PRODUCTS_REQUEST = "SEARCH_PRODUCTS_REQUEST";
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_FAIL = "SEARCH_PRODUCTS_FAIL";
