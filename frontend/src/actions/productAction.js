import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERROR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
} from "../constants/productConstants";

export const getProduct = (
  currentPage = 1,
  price = [0, 2000],
  pCategory,
  pRating = "",
  activeColor = "",
  activeExactPrice = ""
) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });
      let link = `http://localhost:4000/api/v1/products/get?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

      const { data } = await axios.post(link, {
        search: "",
        category: pCategory,
        minPrice: price[0],
        maxPrice: price[1],
        price: activeExactPrice === "0" ? "" : activeExactPrice,
        rating: pRating,
        colorVariant: activeColor === "#fff" ? "" : activeColor,
      });

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

// Search Product
export const getSearchProduct = (searchKeyword = "") => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_PRODUCTS_REQUEST,
      });
      let link = `api/v1/products/get`;
      const { data } = await axios.post(link, {
        search: searchKeyword,
      });
      dispatch({
        type: SEARCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_DETAILS_REQUEST,
      });
      const { data } = await axios.get(`/api/v1/product/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
