//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetExpenceDetails } from "../redux/slices/ExpenceSlice";
import {
  SetTotalExpence,
  SetExpenceLists,
  SetExpenceDetails,
  SetExpenceDropDown,
} from "../redux/slices/ExpenceSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class ExpenceRequest {
  static async ExpenceCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Expence/ExpenceCreate",
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenceDetails());
      ToastMessage.successMessage("Expence Create Successful");
      return true;
    }
  }

  static async ExpenceList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Expence/ExpenceList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetExpenceDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetExpenceLists(data?.[0]?.Data));
      store.dispatch(SetTotalExpence(total || 0));
    }
  }

  static async ExpenceDropDown() {
    const { data } = await RestClient.getRequest(`/Expence/ExpenceDropDown`);

    if (data) {
      store.dispatch(SetExpenceDropDown(data?.data));
    }
  }

  static async ExpenceDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Expence/ExpenceDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetExpenceDetails(data?.[0]));
      return true;
    }
  }

  static async ExpenceUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Expence/ExpenceUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenceDetails());
      ToastMessage.successMessage("Expence Update Successful");
      return true;
    }
  }

  static async ExpenceDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Expence/ExpenceDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Expence Delete Successful");
      return true;
    }
  }
}

export default ExpenceRequest;
