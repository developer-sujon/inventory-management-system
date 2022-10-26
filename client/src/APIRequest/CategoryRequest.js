//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetCategoryDetails } from "../redux/slices/CategorySlice";
import {
  SetTotalCategory,
  SetCategoryLists,
  SetCategoryDetails,
  SetCategoryDropDown,
} from "../redux/slices/CategorySlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class CategoryRequest {
  static async CategoryCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Category/CategoryCreate",
      postBody,
    );

    console.log(data);

    if (data) {
      store.dispatch(ResetCategoryDetails());
      ToastMessage.successMessage("Category Create Successful");
      return true;
    }
  }

  static async CategoryList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Category/CategoryList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetCategoryDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetCategoryLists(data?.[0]?.Data));
      store.dispatch(SetTotalCategory(total || 0));
    }
  }

  static async CategoryDropDown() {
    const { data } = await RestClient.getRequest(`/Category/CategoryDropDown`);

    if (data) {
      store.dispatch(SetCategoryDropDown(data));
    }
  }

  static async CategoryDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Category/CategoryDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetCategoryDetails(data?.[0]));
      return true;
    }
  }

  static async CategoryUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Category/CategoryUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetCategoryDetails());
      ToastMessage.successMessage("Category Update Successful");
      return true;
    }
  }

  static async CategoryDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Category/CategoryDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Category Delete Successful");
      return true;
    }
  }
}

export default CategoryRequest;
