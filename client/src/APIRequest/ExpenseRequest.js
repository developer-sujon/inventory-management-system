//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetExpenseDetails } from "../redux/slices/ExpenseSlice";
import {
  SetTotalExpense,
  SetExpenseLists,
  SetExpenseDetails,
  SetExpenseDropDown,
} from "../redux/slices/ExpenseSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class ExpenseRequest {
  static async ExpenseCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Expense/ExpenseCreate",
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenseDetails());
      ToastMessage.successMessage("Expense Create Successful");
      return true;
    }
  }

  static async ExpenseList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Expense/ExpenseList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetExpenseDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetExpenseLists(data?.[0]?.Data));
      store.dispatch(SetTotalExpense(total || 0));
    }
  }

  static async ExpenseDropDown() {
    const { data } = await RestClient.getRequest(`/Expense/ExpenseDropDown`);

    if (data) {
      store.dispatch(SetExpenseDropDown(data?.data));
    }
  }

  static async ExpenseDetails(id) {
    const { data } = await RestClient.getRequest(
      `/Expense/ExpenseDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetExpenseDetails(data?.[0]));
      return true;
    }
  }

  static async ExpenseUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Expense/ExpenseUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetExpenseDetails());
      ToastMessage.successMessage("Expense Update Successful");
      return true;
    }
  }

  static async ExpenseDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Expense/ExpenseDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Expense Delete Successful");
      return true;
    }
  }
}

export default ExpenseRequest;
