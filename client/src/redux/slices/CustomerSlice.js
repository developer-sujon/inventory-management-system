//External Lib Import
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
      CustomerStatus: true,
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
      Object.keys(state.CustomerDetails).map((i) => {
        return i === "CustomerStatus"
          ? (state.CustomerDetails[i] = true)
          : (state.CustomerDetails[i] = "");
      });
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
