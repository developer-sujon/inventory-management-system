//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "Expense",
  initialState: {
    ExpenseLists: [],
    ExpenseDropDown: [],
    TotalExpense: 0,
    ExpenseDetails: {
      ExpenseType: "",
      ExpenseName: "",
      ExpenseAmount: "",
      ExpenseNote: "",
    },
  },
  reducers: {
    SetExpenseLists(state, action) {
      state.ExpenseLists = action.payload;
    },
    SetTotalExpense(state, action) {
      state.TotalExpense = action.payload;
    },
    SetExpenseDropDown(state, action) {
      state.ExpenseDropDown = action.payload;
    },
    SetExpenseDetails(state, action) {
      state.ExpenseDetails = action.payload;
    },
    ResetExpenseDetails(state, action) {
      Object.keys(state.ExpenseDetails).map(
        (i) => (state.ExpenseDetails[i] = ""),
      );
    },
  },
});

export const {
  SetExpenseLists,
  SetTotalExpense,
  SetExpenseDropDown,
  SetExpenseDetails,
  ResetExpenseDetails,
} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
