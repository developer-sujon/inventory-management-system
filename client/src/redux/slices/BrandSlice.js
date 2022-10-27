//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const BrandSlice = createSlice({
  name: "Brand",
  initialState: {
    BrandLists: [],
    BrandDropDown: [],
    TotalBrand: 0,
    BrandDetails: {
      BrandName: "",
      BrandDetails: "",
      BrandStatus: true,
    },
  },
  reducers: {
    SetBrandLists(state, action) {
      state.BrandLists = action.payload;
    },
    SetTotalBrand(state, action) {
      state.TotalBrand = action.payload;
    },
    SetBrandDropDown(state, action) {
      state.BrandDropDown = action.payload;
    },
    SetBrandDetails(state, action) {
      state.BrandDetails = action.payload;
    },
    ResetBrandDetails(state, action) {
      Object.keys(state.BrandDetails).map((i) => {
        return i === "BrandStatus"
          ? (state.BrandDetails[i] = true)
          : (state.BrandDetails[i] = "");
      });
    },
  },
});

export const {
  SetBrandLists,
  SetTotalBrand,
  SetBrandDropDown,
  SetBrandDetails,
  ResetBrandDetails,
} = BrandSlice.actions;
export default BrandSlice.reducer;
