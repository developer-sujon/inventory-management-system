//external import
import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "Customer",
  initialState: {
    CustomerLists: [],
    CustomerDropDown: [],
    TotalCustomer: 0,
    CustomerDetails: {
      CustomerName: "",
      CustomerEmail: "",
      CustomerPhone: "",
      CustomerAddress: "",
      CustomerAvatar: "",
    },
    CustomerFormValue: {
      CustomerName: "",
      CustomerEmail: "",
      CustomerPhone: "",
      CustomerAddress: "",
      CustomerAvatar: "",
    },
  },
  reducers: {
    SetCustomerLists(state, action) {
      state.CustomerLists = action.payload;
    },
    SetTotalCustomer(state, action) {
      state.TotalCustomer = action.payload;
    },
    SetCustomerDropDown(state, action) {
      state.CustomerDropDown = action.payload;
    },
    SetCustomerDetails(state, action) {
      state.CustomerDetails = action.payload;
    },
    SetFormValueOnChange(state, action) {
      state.CustomerFormValue[action.payload.name] = action.payload.value;
    },
    ResetCustomerDetails(state, action) {
      state.CustomerDetails.CustomerName = "";
      state.CustomerDetails.CustomerEmail = "";
      state.CustomerDetails.CustomerPhone = "";
      state.CustomerDetails.CustomerAddress = "";
      state.CustomerDetails.CustomerAvatar = "";
    },
  },
});

export const {
  SetCustomerLists,
  SetTotalCustomer,
  SetCustomerDropDown,
  SetCustomerDetails,
  SetFormValueOnChange,
  ResetCustomerDetails,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
