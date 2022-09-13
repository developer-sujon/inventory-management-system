//External Import
const SalesRoutes = require("express").Router();
const SalesControllers = require("../controller/Sales/SalesControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Sales Create
SalesRoutes.post("/SalesCreate", UserAuth, SalesControllers.SalesCreate);

//Sales List
SalesRoutes.get(
  "/SalesList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  SalesControllers.SalesList,
);

//Sales Delete
SalesRoutes.delete("/SalesDelete/:id", UserAuth, SalesControllers.SalesDelete);

module.exports = SalesRoutes;
