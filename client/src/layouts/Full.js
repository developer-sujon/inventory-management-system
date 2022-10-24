// @flow
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

// constants
import * as layoutConstants from "../redux/slices/SettingSlice";

// utils
import { changeBodyAttribute } from "../utils";
import { ChangeLayoutType } from "../redux/slices/SettingSlice";

//External Import
const Topbar = React.lazy(() => import("./Topbar"));
const LeftSidebar = React.lazy(() => import("./LeftSidebar"));
const Footer = React.lazy(() => import("./Footer"));

type VerticalLayoutProps = {
  children?: any,
};

type VerticalLayoutState = {
  isMenuOpened?: boolean,
};

const FullLayout = (
  { children }: VerticalLayoutProps,
  state: VerticalLayoutState,
): React$Element<any> => {
  const dispatch = useDispatch();

  const { LayoutColor, LayoutWidth, LeftSideBarTheme, LeftSideBarType } =
    useSelector((state) => state.Setting);

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (document.body) document.body.classList.add("hide-menu");
    return () => {
      if (document.body) document.body.classList.remove("hide-menu");
    };
  }, []);

  /*
   * layout defaults
   */
  useEffect(() => {
    changeBodyAttribute("data-layout", layoutConstants.LAYOUT_FULL);
  }, []);

  useEffect(() => {
    changeBodyAttribute("data-layout-color", LayoutColor);
  }, [LayoutColor]);

  useEffect(() => {
    changeBodyAttribute("data-layout-mode", LayoutWidth);
  }, [LayoutWidth]);

  useEffect(() => {
    changeBodyAttribute("data-leftbar-theme", LeftSideBarTheme);
  }, [LeftSideBarTheme]);

  useEffect(() => {
    changeBodyAttribute("data-leftbar-compact-mode", LeftSideBarType);
  }, [LeftSideBarType]);

  /**
   * Open the menu when having mobile screen
   */
  const openMenu = () => {
    setIsMenuOpened((prevState) => {
      setIsMenuOpened(!prevState);
    });

    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove("sidebar-enable");
      } else {
        document.body.classList.add("sidebar-enable");
      }
    }
  };

  const updateDimensions = useCallback(() => {
    // activate the condensed sidebar if smaller devices like ipad or tablet
    if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
      dispatch(ChangeLayoutType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
    } else if (window.innerWidth > 1028) {
      dispatch(ChangeLayoutType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [dispatch, updateDimensions]);

  const isCondensed =
    LeftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
  const isLight = LeftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

  return (
    <>
      <div className="wrapper">
        <LeftSidebar
          isCondensed={isCondensed}
          isLight={isLight}
          hideUserProfile={true}
        />
        <div className="content-page">
          <div className="content">
            <Topbar openLeftMenuCallBack={openMenu} hideLogo={true} />
            <Container fluid>
              <Outlet />
            </Container>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default FullLayout;
