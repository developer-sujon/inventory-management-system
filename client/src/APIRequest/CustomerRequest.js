//Internal Lib Import
import store from "../redux/store/store";
import RestClient from "./RestClient";

//External Lib Import
import ToastMessage from "../helper/ToastMessage";
import {
  SetCustomerDetails,
  SetCustomerDropDown,
  SetCustomerLists,
  SetTotalCustomer,
} from "../redux/slices/CustomerSlice";

class CustomerRequest {
  static async CustomerCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Customer/CustomerCreate",
      postBody,
    );
    if (data) {
      ToastMessage.successMessage("Customer Create Successfull");
      return true;
    }
  }
  static async CustomerDropDown() {
    const { data } = await RestClient.getRequest("/Customer/CustomerDropDown");
    if (data) {
      store.dispatch(SetCustomerDropDown(data));
      return true;
    }
  }
  static async CustomerList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Customer/CustomerList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      const total = data[0]?.Total[0]?.count;
      store.dispatch(SetCustomerLists(data?.[0]?.Data));
      store.dispatch(SetTotalCustomer(total || 0));
      return true;
    }
  }
  static async CustomerDetails(id) {
    const { data } = await RestClient.getRequest(
      `/Customer/CustomerDetails/${id}`,
    );
    if (data) {
      store.dispatch(SetCustomerDetails(data?.[0]));
      return true;
    }
  }

  static async CustomerUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Customer/CustomerUpdate/${id}`,
      postBody,
    );
    if (data) {
      ToastMessage.successMessage("Customer Update Successfull");
      return true;
    }
  }

  static async CustomerDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Customer/CustomerDelete/${id}`,
    );
    if (data) {
      ToastMessage.successMessage("Customer Delete Successfull");
      return true;
    }
  }
}

export default CustomerRequest;
