//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    CategoryLists: [],
    CategoryDropDown: [],
    TotalCategory: 0,
    CategoryDetails: {
      CategoryName: "",
      CategoryDescription: "",
      CategoryStatus: true,
    },
  },
  reducers: {
    SetCategoryLists(state, action) {
      state.CategoryLists = action.payload;
    },
    SetTotalCategory(state, action) {
      state.TotalCategory = action.payload;
    },
    SetCategoryDropDown(state, action) {
      state.CategoryDropDown = action.payload;
    },
    SetCategoryDetails(state, action) {
      state.CategoryDetails = action.payload;
    },
    ResetCategoryDetails(state, action) {
      Object.keys(state.CategoryDetails).map((i) => {
        return i === "CategoryStatus"
          ? (state.CategoryDetails[i] = true)
          : (state.CategoryDetails[i] = "");
      });
    },
  },
});

export const {
  SetCategoryLists,
  SetTotalCategory,
  SetCategoryDropDown,
  SetCategoryDetails,
  ResetCategoryDetails,
} = CategorySlice.actions;
export default CategorySlice.reducer;
