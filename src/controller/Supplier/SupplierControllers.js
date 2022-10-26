//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const { CreateError } = require("../../helper/ErrorHandler");
const PurchaseSummaryModel = require("../../model/Purchase/PurchaseSummaryModel");
const SuppliersModel = require("../../model/Suppliers/SuppliersModel");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");

/**
 * @desc Supplier Create
 * @access private
 * @route /api/v1/Supplier/SupplierCreate
 * @methud POST
 */

const SupplierCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, SuppliersModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Supplier Drop Down
 * @access private
 * @route /api/v1/Supplier/SupplierDropDown
 * @methud GET
 */

const SupplierDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, SuppliersModel, {
      _id: 1,
      SupplierName: 1,
      SupplierEmail: 1,
      SupplierPhone: 1,
      SupplierAddress: 1,
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Supplier List
 * @access private
 * @route /api/v1/Supplier/SupplierList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const SupplierList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { SupplierName: SearchRgx },
    { SupplierEmail: SearchRgx },
    { SupplierPhone: SearchRgx },
    { SupplierAddress: SearchRgx },
  ];

  try {
    const result = await ListService(req, SuppliersModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Supplier Details
 * @access private
 * @route /api/v1/Supplier/SupplierDetails/:id
 * @methud GET
 */

const SupplierDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, SuppliersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Supplier Update
 * @access private
 * @route /api/v1/Supplier/SupplierUpdate/:id
 * @methud PATCH
 */

const SupplierUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, SuppliersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Supplier  Delete
 * @access private
 * @route /api/v1/Supplier/SupplierDelete/:id
 * @methud DELETE
 */

const SupplierDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { SupplierId: ObjectId(req.params.id) },
      PurchaseSummaryModel,
    );

    if (associal) {
      throw CreateError("This Supplier Associate Purchase");
    }

    const result = await DeleteService(req, SuppliersModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SupplierCreate,
  SupplierDropDown,
  SupplierList,
  SupplierDetails,
  SupplierUpdate,
  SupplierDelete,
};
