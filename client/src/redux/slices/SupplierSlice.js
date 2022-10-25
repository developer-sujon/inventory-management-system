//external import
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
    },
    SupplierFormValue: {
      SupplierName: "",
      SupplierEmail: "",
      SupplierPhone: "",
      SupplierAddress: "",
      SupplierAvatar: "",
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
    SetFormValueOnChange(state, action) {
      state.SupplierFormValue[action.payload.name] = action.payload.value;
    },
    ResetSupplierDetails(state, action) {
      state.SupplierDetails.SupplierName = "";
      state.SupplierDetails.SupplierEmail = "";
      state.SupplierDetails.SupplierPhone = "";
      state.SupplierDetails.SupplierAddress = "";
      state.SupplierDetails.SupplierAvatar = "";
    },
  },
});

export const {
  SetSupplierLists,
  SetTotalSupplier,
  SetSupplierDropDown,
  SetSupplierDetails,
  SetFormValueOnChange,
  ResetSupplierDetails,
} = SupplierSlice.actions;
export default SupplierSlice.reducer;
