//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);
const ChangePassword = lazy(() =>
  import("../../components/User/ChangePassword"),
);

const ChangePasswordPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Change Password Page">
        <ChangePassword />
      </MasterLayout>
    </Suspense>
  );
};

export default ChangePasswordPage;
