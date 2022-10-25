//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetCustomerDetails } from "../redux/slices/CustomerSlice";
import {
  SetTotalCustomer,
  SetCustomerLists,
  SetCustomerDetails,
  SetCustomerDropDown,
} from "../redux/slices/CustomerSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class CustomerRequest {
  static async CustomerCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Customer/CustomerCreate",
      postBody,
    );

    if (data) {
      store.dispatch(ResetCustomerDetails());
      ToastMessage.successMessage("Customer Create Successful");
      return true;
    }
  }

  static async CustomerList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Customer/CustomerList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetCustomerDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetCustomerLists(data?.[0]?.Data));
      store.dispatch(SetTotalCustomer(total || 0));
    }
  }

  static async CustomerDropDown() {
    const { data } = await RestClient.getRequest(`/Customer/CustomerDropDown`);

    if (data) {
      store.dispatch(SetCustomerDropDown(data?.data));
    }
  }

  static async CustomerDetails(id, postBody) {
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
      store.dispatch(ResetCustomerDetails());
      ToastMessage.successMessage("Customer Update Successful");
      return true;
    }
  }

  static async CustomerDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Customer/CustomerDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Customer Delete Successful");
      return true;
    }
  }
}

export default CustomerRequest;
