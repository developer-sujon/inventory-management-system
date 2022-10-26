//External Lib Import
const SummaryRoutes = require("express").Router();
const SummaryControllers = require("../controller/Summary/SummaryControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Expenses Summary
SummaryRoutes.get(
  "/ExpensesSummary",
  UserAuth,
  SummaryControllers.ExpensesSummary,
);

//Purchase Summary
SummaryRoutes.get(
  "/PurchaseSummary",
  UserAuth,
  SummaryControllers.PurchaseSummary,
);

//Sales Summary
SummaryRoutes.get("/SalesSummary", UserAuth, SummaryControllers.SalesSummary);

//Sales Returns Summary
SummaryRoutes.get(
  "/SalesReturnsSummary",
  UserAuth,
  SummaryControllers.SalesReturnsSummary,
);

//Purchase Returns Summary
SummaryRoutes.get(
  "/PurchaseReturnsSummary",
  UserAuth,
  SummaryControllers.PurchaseReturnsSummary,
);

module.exports = SummaryRoutes;
