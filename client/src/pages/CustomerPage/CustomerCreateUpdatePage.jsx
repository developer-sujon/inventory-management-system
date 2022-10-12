//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const CustomerCreateUpdate = lazy(() =>
  import("../../components/Customer/CustomerCreateUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const CustomerCreateUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <CustomerCreateUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default CustomerCreateUpdatePage;
