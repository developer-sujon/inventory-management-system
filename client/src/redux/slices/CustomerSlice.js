//external import
import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
  name: "Customer",
  initialState: {
    CustomerLists: [],
    TotalCustomer: 0,
    CustomerDropDown: [],
    CustomerDetails: {
      CustomerName: "",
      CustomerEmail: "",
      CustomerPhone: "",
      CustomerAddress: "",
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
    SetCustomerOnChange(state, action) {
      state.CustomerDetails[action.payload.name] = action.payload.value;
    },
    ResetCustomerDetails(state, action) {
      state.CustomerDetails = {
        CustomerName: "",
        CustomerEmail: "",
        CustomerPhone: "",
        CustomerAddress: "",
      };
    },
  },
});

export const {
  SetCustomerLists,
  SetTotalCustomer,
  SetCustomerDropDown,
  SetCustomerDetails,
  SetCustomerOnChange,
  ResetCustomerDetails,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
