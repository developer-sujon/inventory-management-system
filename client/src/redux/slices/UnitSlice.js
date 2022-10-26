//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const UnitSlice = createSlice({
  name: "Unit",
  initialState: {
    UnitLists: [],
    UnitDropDown: [],
    TotalUnit: 0,
    UnitDetails: {
      UnitName: "",
      UnitDescription: "",
      UnitStatus: true,
    },
  },
  reducers: {
    SetUnitLists(state, action) {
      state.UnitLists = action.payload;
    },
    SetTotalUnit(state, action) {
      state.TotalUnit = action.payload;
    },
    SetUnitDropDown(state, action) {
      state.UnitDropDown = action.payload;
    },
    SetUnitDetails(state, action) {
      state.UnitDetails = action.payload;
    },
    ResetUnitDetails(state, action) {
      Object.keys(state.UnitDetails).map((i) => {
        return i === "UnitStatus"
          ? (state.UnitDetails[i] = true)
          : (state.UnitDetails[i] = "");
      });
    },
  },
});

export const {
  SetUnitLists,
  SetTotalUnit,
  SetUnitDropDown,
  SetUnitDetails,
  ResetUnitDetails,
} = UnitSlice.actions;
export default UnitSlice.reducer;
