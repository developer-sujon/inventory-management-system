//External Lib Import
import { configureStore } from "@reduxjs/toolkit";

//Internal Import
import LoaderSlice from "../slices/LoaderSlice";
import SettingSlice from "../slices/SettingSlice";
import AuthSlice from "../slices/AuthSlice";
import UserSlice from "../slices/UserSlice";
import CustomerSlice from "../slices/CustomerSlice";
import SupplierSlice from "../slices/SupplierSlice";
import ExpenseTypeSlice from "../slices/ExpenseTypeSlice";
import ExpenceSlice from "../slices/ExpenceSlice";

const store = configureStore({
  reducer: {
    Loader: LoaderSlice,
    Setting: SettingSlice,
    Auth: AuthSlice,
    User: UserSlice,
    Customer: CustomerSlice,
    Supplier: SupplierSlice,
    ExpenseType: ExpenseTypeSlice,
    Expence: ExpenceSlice,
  },
});

export default store;
