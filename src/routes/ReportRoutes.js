//External Import
const ReportRoutes = require("express").Router();
const ReportControllers = require("../controller/Report/ReportControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Expenses Report
ReportRoutes.get("/ExpensesReport", UserAuth, ReportControllers.ExpensesReport);

//Purchase Report
ReportRoutes.get("/PurchaseReport", UserAuth, ReportControllers.PurchaseReport);

//Sales Report
ReportRoutes.get("/SalesReport", UserAuth, ReportControllers.SalesReport);

//Sales Returns Report
ReportRoutes.get(
  "/SalesReturnsReport",
  UserAuth,
  ReportControllers.SalesReturnsReport,
);

//Purchase Returns Report
ReportRoutes.get(
  "/PurchaseReturnsReport",
  UserAuth,
  ReportControllers.PurchaseReturnsReport,
);

module.exports = ReportRoutes;
