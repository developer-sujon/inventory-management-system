//External Lib Import
const CustomerRoutes = require("express").Router();
const CustomerControllers = require("../controller/Customer/CustomerControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Customer Create
CustomerRoutes.post(
  "/CustomerCreate",
  UserAuth,
  CustomerControllers.CustomerCreate,
);

//Customer Drop Down
CustomerRoutes.get(
  "/CustomerDropDown",
  UserAuth,
  CustomerControllers.CustomerDropDown,
);

//Customer List
CustomerRoutes.get(
  "/CustomerList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  CustomerControllers.CustomerList,
);

//Customer Details
CustomerRoutes.get(
  "/CustomerDetails/:id",
  UserAuth,
  CustomerControllers.CustomerDetails,
);

//Customer Update
CustomerRoutes.patch(
  "/CustomerUpdate/:id",
  UserAuth,
  CustomerControllers.CustomerUpdate,
);

//Customer Delete
CustomerRoutes.delete(
  "/CustomerDelete/:id",
  UserAuth,
  CustomerControllers.CustomerDelete,
);

module.exports = CustomerRoutes;
