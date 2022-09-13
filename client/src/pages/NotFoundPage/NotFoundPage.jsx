//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";
import AppNavigation from "../../components/AppNavigation/AppNavigation";
const NotFound = lazy(() => import("../../components/NotFound/NotFound"));

const NotFoundPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <AppNavigation title="Not Found Page" />
      <NotFound />
    </Suspense>
  );
};

export default NotFoundPage;
