//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const ExpenseTypeSlice = createSlice({
  name: "ExpenseType",
  initialState: {
    ExpenseTypeLists: [],
    ExpenseTypeDropDown: [],
    TotalExpenseType: 0,
    ExpenseTypeDetails: {
      ExpenseTypeName: "",
      ExpenseTypeNote: "",
      ExpenseTypeStatus: true,
    },
  },
  reducers: {
    SetExpenseTypeLists(state, action) {
      state.ExpenseTypeLists = action.payload;
    },
    SetTotalExpenseType(state, action) {
      state.TotalExpenseType = action.payload;
    },
    SetExpenseTypeDropDown(state, action) {
      state.ExpenseTypeDropDown = action.payload;
    },
    SetExpenseTypeDetails(state, action) {
      state.ExpenseTypeDetails = action.payload;
    },
    ResetExpenseTypeDetails(state, action) {
      Object.keys(state.ExpenseTypeDetails).map((i) => {
        return i === "ExpenseTypeStatus"
          ? (state.ExpenseTypeDetails[i] = true)
          : (state.ExpenseTypeDetails[i] = "");
      });
    },
  },
});

export const {
  SetExpenseTypeLists,
  SetTotalExpenseType,
  SetExpenseTypeDropDown,
  SetExpenseTypeDetails,
  ResetExpenseTypeDetails,
} = ExpenseTypeSlice.actions;
export default ExpenseTypeSlice.reducer;
