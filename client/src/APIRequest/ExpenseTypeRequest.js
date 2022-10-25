//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetExpenseTypeDetails } from "../redux/slices/ExpenseTypeSlice";
import {
  SetTotalExpenseType,
  SetExpenseTypeLists,
  SetExpenseTypeDetails,
  SetExpenseTypeDropDown,
} from "../redux/slices/ExpenseTypeSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class ExpenseTypeRequest {
  static async ExpenseTypeCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/ExpenseType/ExpenseTypeCreate",
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenseTypeDetails());
      ToastMessage.successMessage("ExpenseType Create Successful");
      return true;
    }
  }

  static async ExpenseTypeList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/ExpenseType/ExpenseTypeList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetExpenseTypeDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetExpenseTypeLists(data?.[0]?.Data));
      store.dispatch(SetTotalExpenseType(total || 0));
    }
  }

  static async ExpenseTypeDropDown() {
    const { data } = await RestClient.getRequest(`/ExpenseType/ExpenseTypeDropDown`);

    if (data) {
      store.dispatch(SetExpenseTypeDropDown(data?.data));
    }
  }

  static async ExpenseTypeDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/ExpenseType/ExpenseTypeDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetExpenseTypeDetails(data?.[0]));
      return true;
    }
  }

  static async ExpenseTypeUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/ExpenseType/ExpenseTypeUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenseTypeDetails());
      ToastMessage.successMessage("ExpenseType Update Successful");
      return true;
    }
  }

  static async ExpenseTypeDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/ExpenseType/ExpenseTypeDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("ExpenseType Delete Successful");
      return true;
    }
  }
}

export default ExpenseTypeRequest;
