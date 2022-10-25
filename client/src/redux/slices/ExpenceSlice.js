//external import
import { createSlice } from "@reduxjs/toolkit";

const ExpenceSlice = createSlice({
  name: "Expence",
  initialState: {
    ExpenceLists: [],
    ExpenceDropDown: [],
    TotalExpence: 0,
    ExpenceDetails: {
      ExpenceName: "",
      ExpenceEmail: "",
      ExpencePhone: "",
      ExpenceAddress: "",
      ExpenceAvatar: "",
    },
  },
  reducers: {
    SetExpenceLists(state, action) {
      state.ExpenceLists = action.payload;
    },
    SetTotalExpence(state, action) {
      state.TotalExpence = action.payload;
    },
    SetExpenceDropDown(state, action) {
      state.ExpenceDropDown = action.payload;
    },
    SetExpenceDetails(state, action) {
      state.ExpenceDetails = action.payload;
    },
    ResetExpenceDetails(state, action) {
      Object.keys(state.ExpenceDetails).map(
        (i) => (state.ExpenceDetails[i] = ""),
      );
    },
  },
});

export const {
  SetExpenceLists,
  SetTotalExpence,
  SetExpenceDropDown,
  SetExpenceDetails,
  ResetExpenceDetails,
} = ExpenceSlice.actions;
export default ExpenceSlice.reducer;
