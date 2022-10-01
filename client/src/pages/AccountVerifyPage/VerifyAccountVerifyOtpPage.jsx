//External Lib Import
import React, { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const AppNavigation = lazy(() =>
  import("../../components/AppNavigation/AppNavigation"),
);
const VerifyAccountVerify = lazy(() =>
  import("../../components/VerifyAccount/VerifyAccountVerifyOtp"),
);

const VerifyAccountVerifyOtpPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <AppNavigation title="Verify Otp Page" />
        <VerifyAccountVerify />
      </Suspense>
    </>
  );
};

export default VerifyAccountVerifyOtpPage;
