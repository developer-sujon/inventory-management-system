//External Lib Import
const ExpenseRoutes = require("express").Router();
const ExpenceControllers = require("../controller/Expense/ExpenseControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Expense Create
ExpenseRoutes.post(
  "/ExpenseCreate",
  UserAuth,
  ExpenceControllers.ExpenseCreate,
);

//Expense List
ExpenseRoutes.get(
  "/ExpenseList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ExpenceControllers.ExpenseList,
);

//Expense Details
ExpenseRoutes.get(
  "/ExpenseDetails/:id",
  UserAuth,
  ExpenceControllers.ExpenseDetails,
);

//Expense Update
ExpenseRoutes.patch(
  "/ExpenseUpdate/:id",
  UserAuth,
  ExpenceControllers.ExpenseUpdate,
);

//Expense Delete
ExpenseRoutes.delete(
  "/ExpenseDelete/:id",
  UserAuth,
  ExpenceControllers.ExpenseDelete,
);

module.exports = ExpenseRoutes;
