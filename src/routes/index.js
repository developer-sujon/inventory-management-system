//External import
const routes = require("express").Router();

//Internal Import
const AuthRoutes = require("./AuthRoutes");
const UserRoutes = require("./UserRoutes");
const AdminRoutes = require("./AdminRoutes");
const BrandRoutes = require("./BrandRoutes");
const CategoryRoutes = require("./CategoryRoutes");
const SupplierRoutes = require("./SupplierRoutes");
const CustomerRoutes = require("./CustomerRoutes");
const ExpenseTypeRoutes = require("./ExpenseTypeRoutes");
const ExpenseRoutes = require("./ExpenseRoutes");
const ProductRoutes = require("./ProductRoutes");
const PurchaseRoutes = require("./PurchaseRoutes");
const SalesRoutes = require("./SalesRoutes");
const PurchaseReturnsRoutes = require("./PurchaseReturnsRoutes");
const SalesReturnsRoutes = require("./SalesReturnsRoutes");

const ReportRoutes = require("./ReportRoutes");
const SummaryRoutes = require("./SummaryRoutes");

//Auth Routes
routes.use("/Auth", AuthRoutes);

//User Routes
routes.use("/User", UserRoutes);

//User Routes
routes.use("/Admin", AdminRoutes);

//Brand Routes
routes.use("/Brand", BrandRoutes);

//Category Routes
routes.use("/Category", CategoryRoutes);

//Supplier Routes
routes.use("/Supplier", SupplierRoutes);

//Customer Routes
routes.use("/Customer", CustomerRoutes);

//Expense Type Routes
routes.use("/ExpenseType", ExpenseTypeRoutes);

//Expense Routes
routes.use("/Expense", ExpenseRoutes);

//Product Routes
routes.use("/Product", ProductRoutes);

//Purchase Routes
routes.use("/Purchase", PurchaseRoutes);

//Purchase Routes
routes.use("/Sales", SalesRoutes);

//Purchase Returns Routes
routes.use("/PurchaseReturns", PurchaseReturnsRoutes);

//Sales Returns Routes
routes.use("/SalesReturns", SalesReturnsRoutes);

//Report Routes
routes.use("/Report", ReportRoutes);

//Summary Routes
routes.use("/Summary", SummaryRoutes);

module.exports = routes;
