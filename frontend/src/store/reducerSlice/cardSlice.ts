import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface CardType {
  cardItems: any;
  shippingInfo: any;
}

const initialState: CardType = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems") || "{}")
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo") || "{}")
    : {},
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action) {
      const item = action.payload;
      const isItemExit = state.cardItems.find(
        (i: any) => i.product === item.product
      );
      if (isItemExit) {
        state.cardItems = state.cardItems.map((i: any) =>
          i.product === isItemExit.product ? item : i
        );
      } else {
        state.cardItems.push(item);
      }
    },
    removeCardItem(state, action) {
      state.cardItems = state.cardItems.filter(
        (i: any) => i.product !== action.payload
      );
    },
    saveShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
  },
});

export const { addToCard, removeCardItem, saveShippingInfo } =
  cardSlice.actions;
export default cardSlice.reducer;

// Thunk

export const addItemsToCard =
  (id: any, quantity: any) => async (dispatch: Dispatch, getState: any) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch(
      addToCard({
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.image[0].url,
        stock: data.product.stock,
        quantity: quantity,
      })
    );
    localStorage.setItem(
      "cardItems",
      JSON.stringify(getState().card.cardItems)
    );
  };

export const removeItemsFormCard =
  (id: any) => async (dispatch: Dispatch, getState: any) => {
    dispatch(removeCardItem(id));
    localStorage.setItem(
      "cardItems",
      JSON.stringify(getState().card.cardItems)
    );
  };

// shiping info

export const saveOrderShippingInfo =
  (data: any) => async (dispatch: Dispatch, getState: any) => {
    dispatch(saveShippingInfo(data));
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
