//External Lib Import
const ExpenseTypeRoutes = require("express").Router();
const ExpenceTypeControllers = require("../controller/ExpenceType/ExpenceTypeControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Expense Type Create
ExpenseTypeRoutes.post(
  "/ExpenseTypeCreate",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeCreate,
);

//Expense Type Drop Down
ExpenseTypeRoutes.get(
  "/ExpenseTypeDropDown",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeDropDown,
);

//Expense Type List
ExpenseTypeRoutes.get(
  "/ExpenseTypeList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeList,
);

//Expense Type Details
ExpenseTypeRoutes.get(
  "/ExpenseTypeDetails/:id",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeDetails,
);

//Expense Type Update
ExpenseTypeRoutes.patch(
  "/ExpenseTypeUpdate/:id",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeUpdate,
);

//Expense Delete
ExpenseTypeRoutes.delete(
  "/ExpenseTypeDelete/:id",
  UserAuth,
  ExpenceTypeControllers.ExpenseTypeDelete,
);

module.exports = ExpenseTypeRoutes;
