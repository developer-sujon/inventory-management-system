//External import
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
    { ExpenceName: SearchRgx },
    { ExpenceAmount: SearchRgx },
    { ExpenceNote: SearchRgx },
    { "ExpenceType.Name": SearchRgx },
  ];
  const JoinStage = {
    $lookup: {
      from: "expensetypes",
      localField: "ExpenceType",
      foreignField: "_id",
      as: "ExpenceType",
    },
  };

  const projection = {
    $project: {
      ExpenceName: 1,
      ExpenceAmount: 1,
      ExpenceNote: 1,
      createdAt: 1,
      ExpenceType: { $first: "$ExpenceType.Name" },
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
