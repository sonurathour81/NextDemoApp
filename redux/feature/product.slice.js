import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/product.services";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log("hihiiidddff");
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log("hihiiidddff");
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
