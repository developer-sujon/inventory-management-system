//External import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import authSlice from "../slices/authSlice";
import loaderSlice from "../slices/loaderSlice";
import profileSlice from "../slices/profileSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    loader: loaderSlice,
    profile: profileSlice,
  },
});

export default store;
