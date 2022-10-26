//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetBrandDetails } from "../redux/slices/BrandSlice";
import {
  SetTotalBrand,
  SetBrandLists,
  SetBrandDetails,
  SetBrandDropDown,
} from "../redux/slices/BrandSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class BrandRequest {
  static async BrandCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Brand/BrandCreate",
      postBody,
    );

    console.log(data);

    if (data) {
      store.dispatch(ResetBrandDetails());
      ToastMessage.successMessage("Brand Create Successful");
      return true;
    }
  }

  static async BrandList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Brand/BrandList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetBrandDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetBrandLists(data?.[0]?.Data));
      store.dispatch(SetTotalBrand(total || 0));
    }
  }

  static async BrandDropDown() {
    const { data } = await RestClient.getRequest(`/Brand/BrandDropDown`);

    if (data) {
      store.dispatch(SetBrandDropDown(data));
    }
  }

  static async BrandDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Brand/BrandDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetBrandDetails(data?.[0]));
      return true;
    }
  }

  static async BrandUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Brand/BrandUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetBrandDetails());
      ToastMessage.successMessage("Brand Update Successful");
      return true;
    }
  }

  static async BrandDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Brand/BrandDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Brand Delete Successful");
      return true;
    }
  }
}

export default BrandRequest;
