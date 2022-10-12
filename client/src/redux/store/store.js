//External Lib Import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import LoaderSlice from "../slices/LoaderSlice";
import AuthSlice from "../slices/AuthSlice";
import UserSlice from "../slices/UserSlice";
import CustomerSlice from "../slices/CustomerSlice";

const store = configureStore({
  reducer: {
    Loader: LoaderSlice,
    Auth: AuthSlice,
    User: UserSlice,
    Customer: CustomerSlice,
  },
});

export default store;
