import { getProductList } from "@/app/productListWithDB/staticFun";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (payload, { dispatch }) => {
    try {
      let res = await getProductList();
      //   let url = payload
      //     ? `/account/bonus?${buildQueryString(payload)}`
      //     : "/account/bonus";
      //   dispatch(startLoading());
      //   const { data, headers } = await API.get(config.peatioWithHeader)(url);
      //   dispatch(stopLoading());
      return res;
    } catch (e) {
      console.log("productsstst errrrrrrr", e);

      return false;
    }
  }
);
