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
    ResetCustomerDetails(state, action) {
      Object.keys(state.CustomerDetails).map(
        (i) => (state.CustomerDetails[i] = ""),
      );
    },
  },
});

export const {
  SetCustomerLists,
  SetTotalCustomer,
  SetCustomerDropDown,
  SetCustomerDetails,
  ResetCustomerDetails,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
