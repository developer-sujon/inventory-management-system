//Internal Import
import SessionHelper from "../helper/SessionHelper";
import ToastMessage from "../helper/ToastMessage";
import { SetLogin } from "../redux/slices/AuthSlice";
import { SetUserDetails } from "../redux/slices/UserSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class AuthRequest {
  static async RegisterUser(postBody) {
    const { data } = await RestClient.postRequest(
      "/Auth/RegisterUser",
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      SessionHelper.SetVerifyEmail(postBody.Email);
      return true;
    }
  }

  static async LoginUser(postBody) {
    const { data } = await RestClient.postRequest("/Auth/LoginUser", postBody);
    if (data) {
      store.dispatch(SetLogin(data?.accessToken));
      store.dispatch(SetUserDetails(data?.userDetails));
      ToastMessage.successMessage("User Login Successfull");
      return true;
    }
  }
}

export default AuthRequest;
