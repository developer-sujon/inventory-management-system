//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

const { CreateError } = require("../../helper/ErrorHandler");
//External Lib Import
const CustomersModel = require("../../model/Customers/CustomersModel");
const ProductsModel = require("../../model/Products/ProductsModel");
const ReturnsSummaryModel = require("../../model/SalesReturn/SalesReturnsSummaryModel");
const SalesSummaryModel = require("../../model/Sales/SalesSummaryModel");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DeleteService = require("../../services/Common/DeleteService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Customer Create
 * @access private
 * @route /api/v1/Customer/CustomerCreate
 * @methud POST
 */

const CustomerCreate = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      {
        $or: [
          { CustomerEmail: req.body.CustomerEmail },
          { CustomerPhone: req.body.CustomerPhone },
        ],
      },
      CustomersModel,
    );

    if (associal) {
      throw CreateError("Customer Email or Mobile Must be Unique");
    }

    const result = await CreateService(req, CustomersModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Customer Drop Down
 * @access private
 * @route /api/v1/Customer/CustomerDropDown
 * @methud GET
 */

const CustomerDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, CustomersModel, {
      _id: 1,
      CustomerName: 1,
      CustomerEmail: 1,
      CustomerPhone: 1,
      CustomerAddress: 1,
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Customer List
 * @access private
 * @route /api/v1/Customer/CustomerList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const CustomerList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { CustomerName: SearchRgx },
    { CustomerEmail: SearchRgx },
    { CustomerPhone: SearchRgx },
    { CustomerAddress: SearchRgx },
  ];

  try {
    const result = await ListService(req, CustomersModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Customer Details
 * @access private
 * @route /api/v1/Customer/CustomerDetails/:id
 * @methud GET
 */

const CustomerDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, CustomersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Customer Update
 * @access private
 * @route /api/v1/Customer/CustomerUpdate/:id
 * @methud PATCH
 */

const CustomerUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, CustomersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Customer  Delete
 * @access private
 * @route /api/v1/Customer/CustomerDelete/:id
 * @methud DELETE
 */

const CustomerDelete = async (req, res, next) => {
  try {
    const associalSales = await CheckAssociateService(
      { CustomerId: ObjectId(req.params.id) },
      SalesSummaryModel,
    );

    if (associalSales) {
      throw CreateError("This Customer Associate Sales");
    }

    const associalReturn = await CheckAssociateService(
      { CustomerId: ObjectId(req.params.id) },
      ReturnsSummaryModel,
    );

    if (associalReturn) {
      throw CreateError("This Customer Associate Return");
    }

    const result = await DeleteService(req, CustomersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CustomerCreate,
  CustomerDropDown,
  CustomerList,
  CustomerDetails,
  CustomerUpdate,
  CustomerDelete,
};
