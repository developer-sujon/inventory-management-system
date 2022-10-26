//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetModelDetails } from "../redux/slices/ModelSlice";
import {
  SetTotalModel,
  SetModelLists,
  SetModelDetails,
  SetModelDropDown,
} from "../redux/slices/ModelSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class ModelRequest {
  static async ModelCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Model/ModelCreate",
      postBody,
    );

    console.log(data);

    if (data) {
      store.dispatch(ResetModelDetails());
      ToastMessage.successMessage("Model Create Successful");
      return true;
    }
  }

  static async ModelList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Model/ModelList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetModelDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetModelLists(data?.[0]?.Data));
      store.dispatch(SetTotalModel(total || 0));
    }
  }

  static async ModelDropDown() {
    const { data } = await RestClient.getRequest(`/Model/ModelDropDown`);

    if (data) {
      store.dispatch(SetModelDropDown(data));
    }
  }

  static async ModelDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Model/ModelDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetModelDetails(data?.[0]));
      return true;
    }
  }

  static async ModelUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Model/ModelUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetModelDetails());
      ToastMessage.successMessage("Model Update Successful");
      return true;
    }
  }

  static async ModelDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Model/ModelDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Model Delete Successful");
      return true;
    }
  }
}

export default ModelRequest;
