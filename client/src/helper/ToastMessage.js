//external import
import cogoToast from "cogo-toast";

class ToastMessage {
  static successMessage(msg) {
    return cogoToast.success(msg, {
      position: "top-right",
    });
  }
  static errorMessage(msg) {
    return cogoToast.error(msg, {
      position: "top-right",
    });
  }
}

export default ToastMessage;