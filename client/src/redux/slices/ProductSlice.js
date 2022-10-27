//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    ProductLists: [],
    ProductDropDown: [],
    TotalProduct: 0,
    ProductDetails: {
      ProductName: "",
      BrandId: "",
      CategoryId: "",
      UnitId: "",
      ModelId: "",
      ProductDetails: "",
      ProductStatus: true,
    },
  },
  reducers: {
    SetProductLists(state, action) {
      state.ProductLists = action.payload;
    },
    SetTotalProduct(state, action) {
      state.TotalProduct = action.payload;
    },
    SetProductDropDown(state, action) {
      state.ProductDropDown = action.payload;
    },
    SetProductDetails(state, action) {
      state.ProductDetails = action.payload;
    },
    ResetProductDetails(state, action) {
      Object.keys(state.ProductDetails).map((i) => {
        return i === "ProductStatus"
          ? (state.ProductDetails[i] = true)
          : (state.ProductDetails[i] = "");
      });
    },
  },
});

export const {
  SetProductLists,
  SetTotalProduct,
  SetProductDropDown,
  SetProductDetails,
  ResetProductDetails,
} = ProductSlice.actions;
export default ProductSlice.reducer;
