import axios from "axios";

class AuthRequest {
  static async login() {
    try {
      const data = await axios.get(
        "https://product-management-table-amit.herokuapp.com/api/v1/productList/1/5/0",
      );

      console.log(data);

      return true;
    } catch (error) {
      return false;
    }
  }
}

export default AuthRequest;
