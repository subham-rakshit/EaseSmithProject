import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProductList: [],
};

const cartProductSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    productItemAddToCart: (state, action) => {
      state.cartProductList.push(action.payload);
    },
  },
});

export const { productItemAddToCart } = cartProductSlice.actions;

export default cartProductSlice.reducer;
