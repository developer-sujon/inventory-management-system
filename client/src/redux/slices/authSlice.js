//external import
import { createSlice } from "@reduxjs/toolkit";
import SessionHelper from "../../helper/SessionHelper";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: SessionHelper.getToken(),
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
      SessionHelper.setToken(action.payload);
    },
    logout: (state, action) => {
      state.accessToken = null;
      SessionHelper.removeToken();
    },
  },
});

export const { setLoading, removeLoading } = authSlice.actions;
export default authSlice.reducer;
