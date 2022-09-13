//External Import
const PurchaseReturnsRoutes = require("express").Router();
const PurchaseReturnsControllers = require("../controller/PurchaseReturns/PurchaseReturnsControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Purchase Returns Create
PurchaseReturnsRoutes.post(
  "/PurchaseReturnsCreate",
  UserAuth,
  PurchaseReturnsControllers.PurchaseReturnsCreate,
);

//Purchase Returns List
PurchaseReturnsRoutes.get(
  "/PurchaseReturnsList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  PurchaseReturnsControllers.PurchaseReturnsList,
);

//Purchase Returns Delete
PurchaseReturnsRoutes.delete(
  "/PurchaseReturnsDelete/:id",
  UserAuth,
  PurchaseReturnsControllers.PurchaseReturnsDelete,
);

module.exports = PurchaseReturnsRoutes;
