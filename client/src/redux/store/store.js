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
import ExpenseSlice from "../slices/ExpenseSlice";
import BrandSlice from "../slices/BrandSlice";
import CategorySlice from "../slices/CategorySlice";
import UnitSlice from "../slices/UnitSlice";
import ModelSlice from "../slices/ModelSlice";

const store = configureStore({
  reducer: {
    Loader: LoaderSlice,
    Setting: SettingSlice,
    Auth: AuthSlice,
    User: UserSlice,
    Customer: CustomerSlice,
    Supplier: SupplierSlice,
    ExpenseType: ExpenseTypeSlice,
    Expense: ExpenseSlice,
    Brand: BrandSlice,
    Category: CategorySlice,
    Unit: UnitSlice,
    Model: ModelSlice,
  },
});

export default store;
