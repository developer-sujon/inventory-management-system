import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import * as layoutConstants from "../redux/slices/SettingSlice";

// All layouts/containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal";
import FullLayout from "../layouts/Full";

//External Import
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LazyLoader from "../components/Common/LazyLoader";

// Auth
const Login = React.lazy(() => import("../pages/Account/Login"));
const Register = React.lazy(() => import("../pages/Account/Register"));

//Page
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Logout = React.lazy(() => import("../pages/Account/Logout"));
const CustomerCreateUpdatePage = React.lazy(() =>
  import("../pages/Customer/CustomerCreateUpdatePage"),
);

const LoadComponent = ({ component: Component }) => (
  <Suspense fallback={<LazyLoader />}>
    <Component />
  </Suspense>
);

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
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);
};

export default AllRoutes;
