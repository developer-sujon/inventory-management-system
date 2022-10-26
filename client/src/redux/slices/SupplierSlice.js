//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

const SupplierSlice = createSlice({
  name: "Supplier",
  initialState: {
    SupplierLists: [],
    SupplierDropDown: [],
    TotalSupplier: 0,
    SupplierDetails: {
      SupplierName: "",
      SupplierEmail: "",
      SupplierPhone: "",
      SupplierAddress: "",
      SupplierAvatar: "",
      SupplierStatus: true,
    },
  },
  reducers: {
    SetSupplierLists(state, action) {
      state.SupplierLists = action.payload;
    },
    SetTotalSupplier(state, action) {
      state.TotalSupplier = action.payload;
    },
    SetSupplierDropDown(state, action) {
      state.SupplierDropDown = action.payload;
    },
    SetSupplierDetails(state, action) {
      state.SupplierDetails = action.payload;
    },
    ResetSupplierDetails(state, action) {
      Object.keys(state.SupplierDetails).map((i) => {
        return i === "SupplierStatus"
          ? (state.SupplierDetails[i] = true)
          : (state.SupplierDetails[i] = "");
      });
    },
  },
});

export const {
  SetSupplierLists,
  SetTotalSupplier,
  SetSupplierDropDown,
  SetSupplierDetails,
  ResetSupplierDetails,
} = SupplierSlice.actions;
export default SupplierSlice.reducer;
