//Internal Import
import ToastMessage from "../helpers/ToastMessage";
import { ResetProductDetails } from "../redux/slices/ProductSlice";
import {
  SetTotalProduct,
  SetProductLists,
  SetProductDetails,
  SetProductDropDown,
} from "../redux/slices/ProductSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class ProductRequest {
  static async ProductCreate(postBody) {
    const { data } = await RestClient.postRequest(
      "/Product/ProductCreate",
      postBody,
    );

    console.log(data);

    if (data) {
      store.dispatch(ResetProductDetails());
      ToastMessage.successMessage("Product Create Successful");
      return true;
    }
  }

  static async ProductList(pageNumber, perPage, searchKey) {
    const { data } = await RestClient.getRequest(
      `/Product/ProductList/${pageNumber}/${perPage}/${searchKey}`,
    );

    if (data) {
      store.dispatch(ResetProductDetails());
      const total = data?.[0]?.Total[0]?.count;
      store.dispatch(SetProductLists(data?.[0]?.Data));
      store.dispatch(SetTotalProduct(total || 0));
    }
  }

  static async ProductDropDown() {
    const { data } = await RestClient.getRequest(`/Product/ProductDropDown`);

    if (data) {
      store.dispatch(SetProductDropDown(data));
    }
  }

  static async ProductDetails(id, postBody) {
    const { data } = await RestClient.getRequest(
      `/Product/ProductDetails/${id}`,
    );

    if (data) {
      store.dispatch(SetProductDetails(data?.[0]));
      return true;
    }
  }

  static async ProductUpdate(id, postBody) {
    const { data } = await RestClient.updateRequest(
      `/Product/ProductUpdate/${id}`,
      postBody,
    );

    if (data) {
      store.dispatch(ResetProductDetails());
      ToastMessage.successMessage("Product Update Successful");
      return true;
    }
  }

  static async ProductDelete(id) {
    const { data } = await RestClient.deleteRequest(
      `/Product/ProductDelete/${id}`,
    );

    if (data) {
      ToastMessage.successMessage("Product Delete Successful");
      return true;
    }
  }
}

export default ProductRequest;
