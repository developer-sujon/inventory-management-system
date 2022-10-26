//External Lib Import
const ExpensesModel = require("../../model/Expenses/ExpensesModel");
const PurchaseSummaryModel = require("../../model/Purchase/PurchaseSummaryModel");
const SalesReturnsSummaryModel = require("../../model/SalesReturn/SalesReturnsSummaryModel");
const SalesSummaryModel = require("../../model/Sales/SalesSummaryModel");
const PurchaseReturnsSummaryModel = require("../../model/PurchaseReturns/PurchaseReturnsSummaryModel");

const ExpensesReportService = require("../../services/Report/ExpensesReportService");
const PurchaseReportService = require("../../services/Report/PurchaseReportService");
const ReturnReportService = require("../../services/Report/SalesReturnReportService");
const SalesReturnReportService = require("../../services/Report/SaleReportService");
const PurchaseReturnReportService = require("../../services/Report/PurchaseReturnReportService");
const SaleReportService = require("../../services/Report/SaleReportService");

/**
 * @desc Expenses Report
 * @access private
 * @route /api/v1/Report/ExpensesReport
 * @methud GET
 */

const ExpensesReport = async (req, res, next) => {
  try {
    const data = await ExpensesReportService(req, ExpensesModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Purchase Report
 * @access private
 * @route /api/v1/Report/PurchaseReport
 * @methud GET
 */

const PurchaseReport = async (req, res, next) => {
  try {
    const data = await PurchaseReportService(req, PurchaseSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Sales Report
 * @access private
 * @route /api/v1/Report/SalesReport
 * @methud GET
 */

const SalesReport = async (req, res, next) => {
  try {
    const data = await SaleReportService(req, SalesSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Sales Returns Report
 * @access private
 * @route /api/v1/Report/SalesReturnsReport
 * @methud GET
 */

const SalesReturnsReport = async (req, res, next) => {
  try {
    const data = await SalesReturnReportService(req, SalesReturnsSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Purchase Returns Report
 * @access private
 * @route /api/v1/Report/PurchaseReturnsReport
 * @methud GET
 */

const PurchaseReturnsReport = async (req, res, next) => {
  try {
    const data = await PurchaseReturnReportService(
      req,
      PurchaseReturnsSummaryModel,
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ExpensesReport,
  PurchaseReport,
  SalesReport,
  SalesReturnsReport,
  PurchaseReturnsReport,
};
