//External Lib Import
const ExpenseModel = require("../../model/Expenses/ExpensesModel");
const CreateService = require("../../services/Common/CreateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");
const ListOneJoinService = require("../../services/Common/ListOneJoinService");
const UpdateService = require("../../services/Common/UpdateService");

/**
 * @desc Expense Create
 * @access private
 * @route /api/v1/Expense/ExpenseCreate
 * @methud POST
 */

const ExpenseCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, ExpenseModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense List
 * @access private
 * @route /api/v1/Expense/ExpenseList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ExpenseList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { ExpenseName: SearchRgx },
    { ExpenseAmount: SearchRgx },
    { ExpenseNote: SearchRgx },
    { "ExpenseType.Name": SearchRgx },
  ];
  const JoinStage = {
    $lookup: {
      from: "expensetypes",
      localField: "ExpenseType",
      foreignField: "_id",
      as: "ExpenseType",
    },
  };

  const projection = {
    $project: {
      ExpenseName: 1,
      ExpenseAmount: 1,
      ExpenseNote: 1,
      createdAt: 1,
      ExpenseType: { $first: "$ExpenseType.ExpenseTypeName" },
    },
  };

  try {
    const result = await ListOneJoinService(
      req,
      ExpenseModel,
      SearchArray,
      JoinStage,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Details
 * @access private
 * @route /api/v1/Expense/ExpenseDetails/:id
 * @methud GET
 */

const ExpenseDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, ExpenseModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Update
 * @access private
 * @route /api/v1/Expense/ExpenseUpdate/:id
 * @methud PATCH
 */

const ExpenseUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, ExpenseModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Delete
 * @access private
 * @route /api/v1/Expense/ExpenseDelete/:id
 * @methud PATCH
 */

const ExpenseDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, ExpenseModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ExpenseCreate,
  ExpenseList,
  ExpenseDetails,
  ExpenseUpdate,
  ExpenseDelete,
};
