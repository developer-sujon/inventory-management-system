//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetSupplierDetails } from "../redux/slices/SupplierSlice";
import {
  SetTotalSupplier,
  SetSupplierLists,
  SetSupplierDetails,
  SetSupplierDropDown,
} from "../redux/slices/SupplierSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class SupplierRequest {
  static async SupplierCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Supplier/SupplierCreate",
      postBody,
    );

    if (data) {
      store.dispatch(ResetSupplierDetails());
      ToastMessage.successMessage("Supplier Create Successful");
      return true;
    }
  }

  static async SupplierList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Supplier/SupplierList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetSupplierDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetSupplierLists(data?.[0]?.Data));
      store.dispatch(SetTotalSupplier(total || 0));
    }
  }

  static async SupplierDropDown() {
    const { data } = await RestClient.getRequest(`/Supplier/SupplierDropDown`);

    if (data) {
      store.dispatch(SetSupplierDropDown(data?.data));
    }
  }

  static async SupplierDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Supplier/SupplierDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetSupplierDetails(data?.[0]));
      return true;
    }
  }

  static async SupplierUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Supplier/SupplierUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetSupplierDetails());
      ToastMessage.successMessage("Supplier Update Successful");
      return true;
    }
  }

  static async SupplierDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Supplier/SupplierDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Supplier Delete Successful");
      return true;
    }
  }
}

export default SupplierRequest;
