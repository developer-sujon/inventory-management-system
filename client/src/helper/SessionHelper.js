class SessionHelper {
  static setToken(accessToken) {
    sessionStorage.setItem("accessToken", accessToken);
  }
  static getToken() {
    return sessionStorage.getItem("accessToken");
  }
  static removeToken() {
    return sessionStorage.removeItem("accessToken");
  }
  static setUserDetails(User) {
    sessionStorage.setItem("User", JSON.stringify(User));
  }
  static getUserDetails() {
    return JSON.parse(sessionStorage.getItem("User"));
  }
  static removeUserDetails() {
    return sessionStorage.removeItem("User");
  }
  static setOtpEmail() {
    return JSON.parse(sessionStorage.getItem("otp"));
  }
  static getOtpEmail() {
    return sessionStorage.removeItem("otp");
  }
  static setOtpCode() {
    return JSON.parse(sessionStorage.getItem("otp"));
  }
  static getOtpCode() {
    return sessionStorage.removeItem("otp");
  }
}

export default SessionHelper;
