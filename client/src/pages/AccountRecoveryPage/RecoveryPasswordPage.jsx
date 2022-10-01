//External Lib Import
import React, { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const RecoveryResetPass = lazy(() =>
  import("../../components/AccountRecovery/RecoveryResetPass"),
);
const AppNavigation = lazy(() =>
  import("../../components/AppNavigation/AppNavigation"),
);

const RecoveryPasswordPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <AppNavigation title="Create Password Page" />
        <RecoveryResetPass />
      </Suspense>
    </>
  );
};

export default RecoveryPasswordPage;
