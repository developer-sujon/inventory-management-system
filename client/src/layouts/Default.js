// @flow
import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// Utils
import { changeBodyAttribute } from "../utils";

const DefaultLayout = (props) => {
  const { LayoutColor } = useSelector((state) => state.Setting);

  useEffect(() => {
    changeBodyAttribute("data-layout-color", LayoutColor);
  }, [LayoutColor]);

  useEffect(() => {
    if (document.body) document.body.classList.add("authentication-bg");

    return () => {
      if (document.body) document.body.classList.remove("authentication-bg");
    };
  }, []);

  return <Outlet />;
};
export default DefaultLayout;
