//External Import
const ExpensesModel = require("../../model/Expenses/ExpensesModel");
const PurchaseSummaryModel = require("../../model/Purchase/PurchaseSummaryModel");
const SalesReturnsSummaryModel = require("../../model/SalesReturn/SalesReturnsSummaryModel");
const SalesSummaryModel = require("../../model/Sales/SalesSummaryModel");
const PurchaseReturnsSummaryModel = require("../../model/PurchaseReturns/PurchaseReturnsSummaryModel");

const ExpensesSummaryService = require("../../services/Summary/ExpensesSummaryService");
const PurchaseSummaryService = require("../../services/Summary/PurchaseSummaryService");
const ReturnSummaryService = require("../../services/Summary/SalesReturnSummaryService");
const SalesReturnSummaryService = require("../../services/Summary/SalesReturnSummaryService");
const PurchaseReturnSummaryService = require("../../services/Summary/PurchaseReturnSummaryService");
const SaleSummaryService = require("../../services/Summary/SaleSummaryService");

/**
 * @desc Expenses Summary
 * @access private
 * @route /api/v1/Summary/ExpensesSummary
 * @methud GET
 */

const ExpensesSummary = async (req, res, next) => {
  try {
    const data = await ExpensesSummaryService(req, ExpensesModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Purchase Summary
 * @access private
 * @route /api/v1/Summary/PurchaseSummary
 * @methud GET
 */

const PurchaseSummary = async (req, res, next) => {
  try {
    const data = await PurchaseSummaryService(req, PurchaseSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Sales Summary
 * @access private
 * @route /api/v1/Summary/SalesSummary
 * @methud GET
 */

const SalesSummary = async (req, res, next) => {
  try {
    const data = await SaleSummaryService(req, SalesSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Sales Returns Summary
 * @access private
 * @route /api/v1/Summary/SalesReturnsSummary
 * @methud GET
 */

const SalesReturnsSummary = async (req, res, next) => {
  try {
    const data = await SalesReturnSummaryService(req, SalesReturnsSummaryModel);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Purchase Returns Summary
 * @access private
 * @route /api/v1/Summary/PurchaseReturnsSummary
 * @methud GET
 */

const PurchaseReturnsSummary = async (req, res, next) => {
  try {
    const data = await PurchaseReturnSummaryService(
      req,
      PurchaseReturnsSummaryModel,
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ExpensesSummary,
  PurchaseSummary,
  SalesSummary,
  SalesReturnsSummary,
  PurchaseReturnsSummary,
};
