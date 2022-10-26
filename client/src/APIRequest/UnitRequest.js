//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetUnitDetails } from "../redux/slices/UnitSlice";
import {
  SetTotalUnit,
  SetUnitLists,
  SetUnitDetails,
  SetUnitDropDown,
} from "../redux/slices/UnitSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class UnitRequest {
  static async UnitCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Unit/UnitCreate",
      postBody,
    );

    console.log(data);

    if (data) {
      store.dispatch(ResetUnitDetails());
      ToastMessage.successMessage("Unit Create Successful");
      return true;
    }
  }

  static async UnitList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Unit/UnitList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetUnitDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetUnitLists(data?.[0]?.Data));
      store.dispatch(SetTotalUnit(total || 0));
    }
  }

  static async UnitDropDown() {
    const { data } = await RestClient.getRequest(`/Unit/UnitDropDown`);

    if (data) {
      store.dispatch(SetUnitDropDown(data));
    }
  }

  static async UnitDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Unit/UnitDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetUnitDetails(data?.[0]));
      return true;
    }
  }

  static async UnitUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Unit/UnitUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetUnitDetails());
      ToastMessage.successMessage("Unit Update Successful");
      return true;
    }
  }

  static async UnitDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Unit/UnitDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Unit Delete Successful");
      return true;
    }
  }
}

export default UnitRequest;
