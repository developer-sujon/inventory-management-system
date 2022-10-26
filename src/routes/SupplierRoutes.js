//External Lib Import
const SupplierRoutes = require("express").Router();
const SupplierControllers = require("../controller/Supplier/SupplierControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Supplier Create
SupplierRoutes.post(
  "/SupplierCreate",
  UserAuth,
  SupplierControllers.SupplierCreate,
);

//Supplier Drop Down
SupplierRoutes.get(
  "/SupplierDropDown",
  UserAuth,
  SupplierControllers.SupplierDropDown,
);

//Supplier List
SupplierRoutes.get(
  "/SupplierList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  SupplierControllers.SupplierList,
);

//Supplier Details
SupplierRoutes.get(
  "/SupplierDetails/:id",
  UserAuth,
  SupplierControllers.SupplierDetails,
);

//Supplier Update
SupplierRoutes.patch(
  "/SupplierUpdate/:id",
  UserAuth,
  SupplierControllers.SupplierUpdate,
);

//Supplier Delete
SupplierRoutes.delete(
  "/SupplierDelete/:id",
  UserAuth,
  SupplierControllers.SupplierDelete,
);

module.exports = SupplierRoutes;
