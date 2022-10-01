//External import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import AuthSlice from "../slices/AuthSlice";
import LoaderSlice from "../slices/LoaderSlice";
import UserSlice from "../slices/UserSlice";

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Loader: LoaderSlice,
    User: UserSlice,
  },
});

export default store;
