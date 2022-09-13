//External Import
const SalesReturnsRoutes = require("express").Router();
const SalesReturnsControllers = require("../controller/SalesReturns/SalesReturnsControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//SalesReturns Create
SalesReturnsRoutes.post(
  "/SalesReturnsCreate",
  UserAuth,
  SalesReturnsControllers.SalesReturnsCreate,
);

//SalesReturns List
SalesReturnsRoutes.get(
  "/SalesReturnsList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  SalesReturnsControllers.SalesReturnsList,
);

//SalesReturns Delete
SalesReturnsRoutes.delete(
  "/SalesReturnsDelete/:id",
  UserAuth,
  SalesReturnsControllers.SalesReturnsDelete,
);

module.exports = SalesReturnsRoutes;
