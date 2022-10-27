//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const ExpenseTypesModel = require("../../model/ExpensesType/ExpensesTypeModel");
const ExpensesModel = require("../../model/Expenses/ExpensesModel");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const { CreateError } = require("../../helper/ErrorHandler");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Expense Type Create
 * @access private
 * @route /api/v1/Expense/ExpenseTypeCreate
 * @methud POST
 */

const ExpenseTypeCreate = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { ExpenseTypeName: req.body.ExpenseTypeName },
      ExpenseTypesModel,
    );

    if (associal) {
      throw CreateError("This Expense Type Already Created");
    }

    const result = await CreateService(req, ExpenseTypesModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Type Drop Down
 * @access private
 * @route /api/v1/ExpenseType/ExpenseTypeDropDown
 * @methud GET
 */

const ExpenseTypeDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(
      req,
      ExpenseTypesModel,
      {
        ExpenseTypeStatus: true,
      },
      {
        label: "$ExpenseTypeName",
        value: "$_id",
      },
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Type List
 * @access private
 * @route /api/v1/Expense/ExpenseTypeList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ExpenseTypeList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, ExpenseTypesModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Type Details
 * @access private
 * @route /api/v1/Expense/ExpenseTypeDetails/:id
 * @methud GET
 */

const ExpenseTypeDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, ExpenseTypesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Type Update
 * @access private
 * @route /api/v1/Expense/ExpenseTypeUpdate/:id
 * @methud PATCH
 */

const ExpenseTypeUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, ExpenseTypesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Expense Type Delete
 * @access private
 * @route /api/v1/Expense/ExpenseTypeDelete/:id
 * @methud DELETE
 */

const ExpenseTypeDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { ExpenseType: ObjectId(req.params.id) },
      ExpensesModel,
    );

    if (associal) {
      throw CreateError("This Expense Type Associate Expense");
    }

    const result = await DeleteService(req, ExpenseTypesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ExpenseTypeCreate,
  ExpenseTypeDropDown,
  ExpenseTypeList,
  ExpenseTypeDetails,
  ExpenseTypeUpdate,
  ExpenseTypeDelete,
};
