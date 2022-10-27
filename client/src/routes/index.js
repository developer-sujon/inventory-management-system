import React, { Suspense, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import * as layoutConstants from "../redux/slices/SettingSlice";

// All layouts/containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal";
import FullLayout from "../layouts/Full";

//External Lib Import
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Auth
const Login = React.lazy(() => import("../pages/Account/Login"));
const Register = React.lazy(() => import("../pages/Account/Register"));

//Page
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Logout = React.lazy(() => import("../pages/Account/Logout"));
const CustomerCreateUpdatePage = React.lazy(() =>
  import("../pages/Customer/CustomerCreateUpdatePage"),
);
const CustomerListPage = React.lazy(() =>
  import("../pages/Customer/CustomerListPage"),
);

const SupplierCreateUpdatePage = React.lazy(() =>
  import("../pages/Supplier/SupplierCreateUpdatePage"),
);
const SupplierListPage = React.lazy(() =>
  import("../pages/Supplier/SupplierListPage"),
);

const ExpenseTypeCreateUpdatePage = React.lazy(() =>
  import("../pages/ExpenseType/ExpenseTypeCreateUpdatePage"),
);
const ExpenseTypeListPage = React.lazy(() =>
  import("../pages/ExpenseType/ExpenseTypeListPage"),
);

const ExpenseCreateUpdatePage = React.lazy(() =>
  import("../pages/Expense/ExpenseCreateUpdatePage"),
);
const ExpenseListPage = React.lazy(() =>
  import("../pages/Expense/ExpenseListPage"),
);

const BrandCreateUpdatePage = React.lazy(() =>
  import("../pages/Brand/BrandCreateUpdatePage"),
);
const BrandListPage = React.lazy(() => import("../pages/Brand/BrandListPage"));

const CategoryCreateUpdatePage = React.lazy(() =>
  import("../pages/Category/CategoryCreateUpdatePage"),
);
const CategoryListPage = React.lazy(() =>
  import("../pages/Category/CategoryListPage"),
);

const UnitCreateUpdatePage = React.lazy(() =>
  import("../pages/Unit/UnitCreateUpdatePage"),
);
const UnitListPage = React.lazy(() => import("../pages/Unit/UnitListPage"));

const ModelCreateUpdatePage = React.lazy(() =>
  import("../pages/Model/ModelCreateUpdatePage"),
);
const ModelListPage = React.lazy(() => import("../pages/Model/ModelListPage"));

const ProductCreateUpdatePage = React.lazy(() =>
  import("../pages/Product/ProductCreateUpdatePage"),
);
const ProductListPage = React.lazy(() =>
  import("../pages/Product/ProductListPage"),
);

const LoadComponent = ({ component: Component }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <Component />;
};

const AllRoutes = () => {
  const { LayoutType } = useSelector((state) => state.Setting);

  const getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (LayoutType) {
      case layoutConstants.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case layoutConstants.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case layoutConstants.LAYOUT_FULL:
        layoutCls = FullLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  let Layout = getLayout();

  return useRoutes([
    {
      // public routes
      path: "/account",
      element: <PublicRoute component={DefaultLayout} />,
      children: [
        { path: "login", element: <LoadComponent component={Login} /> },
        { path: "logout", element: <LoadComponent component={Logout} /> },
        {
          path: "register",
          element: <LoadComponent component={Register} />,
        },
      ],
    },
    {
      // auth protected routes
      path: "/",
      element: <PrivateRoute component={Layout} />,
      children: [
        {
          path: "",
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "/dashboard",
          element: <LoadComponent component={Dashboard} />,
        },
        {
          path: "customer",
          children: [
            {
              path: "customer-create-update",
              element: <CustomerCreateUpdatePage />,
            },
            {
              path: "customer-list",
              element: <CustomerListPage />,
            },
          ],
        },
        {
          path: "supplier",
          children: [
            {
              path: "supplier-create-update",
              element: <SupplierCreateUpdatePage />,
            },
            {
              path: "supplier-list",
              element: <SupplierListPage />,
            },
          ],
        },
        {
          path: "expense-type",
          children: [
            {
              path: "expense-type-create-update",
              element: <ExpenseTypeCreateUpdatePage />,
            },
            {
              path: "expense-type-list",
              element: <ExpenseTypeListPage />,
            },
          ],
        },
        {
          path: "expense",
          children: [
            {
              path: "expense-create-update",
              element: <ExpenseCreateUpdatePage />,
            },
            {
              path: "expense-list",
              element: <ExpenseListPage />,
            },
          ],
        },
        {
          path: "brand",
          children: [
            {
              path: "brand-create-update",
              element: <BrandCreateUpdatePage />,
            },
            {
              path: "brand-list",
              element: <BrandListPage />,
            },
          ],
        },
        {
          path: "category",
          children: [
            {
              path: "category-create-update",
              element: <CategoryCreateUpdatePage />,
            },
            {
              path: "category-list",
              element: <CategoryListPage />,
            },
          ],
        },
        {
          path: "unit",
          children: [
            {
              path: "unit-create-update",
              element: <UnitCreateUpdatePage />,
            },
            {
              path: "unit-list",
              element: <UnitListPage />,
            },
          ],
        },
        {
          path: "model",
          children: [
            {
              path: "model-create-update",
              element: <ModelCreateUpdatePage />,
            },
            {
              path: "model-list",
              element: <ModelListPage />,
            },
          ],
        },
        {
          path: "product",
          children: [
            {
              path: "product-create-update",
              element: <ProductCreateUpdatePage />,
            },
            {
              path: "product-list",
              element: <ProductListPage />,
            },
          ],
        },
      ],
    },
  ]);
};

export default AllRoutes;
