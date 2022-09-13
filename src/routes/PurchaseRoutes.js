//External Import
const PurchaseRoutes = require("express").Router();
const PurchaseControllers = require("../controller/Purchase/PurchaseControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Purchase Create
PurchaseRoutes.post(
  "/PurchaseCreate",
  UserAuth,
  PurchaseControllers.PurchaseCreate,
);

//Purchase List
PurchaseRoutes.get(
  "/PurchaseList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  PurchaseControllers.PurchaseList,
);

//Purchase Delete
PurchaseRoutes.delete(
  "/PurchaseDelete/:id",
  UserAuth,
  PurchaseControllers.PurchaseDelete,
);

module.exports = PurchaseRoutes;
