//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const CustomerList = lazy(() =>
  import("../../components/Customer/CustomerList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const CustomerListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <CustomerList />
      </MasterLayout>
    </Suspense>
  );
};

export default CustomerListPage;
