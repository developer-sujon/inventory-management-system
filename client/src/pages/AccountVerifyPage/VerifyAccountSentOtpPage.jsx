//External lib imports
import React, { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const VerifyAccountSentOtp = lazy(() =>
  import("../../components/VerifyAccount/VerifyAccountSentOtp"),
);
const AppNavigation = lazy(() =>
  import("../../components/AppNavigation/AppNavigation"),
);

const VerifyAccountSentOtpPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <AppNavigation title="Verify Account SentOtp Page" />
        <VerifyAccountSentOtp />
      </Suspense>
    </>
  );
};

export default VerifyAccountSentOtpPage;
