//External Import
const ObjectId = require("mongoose").Types.ObjectId;

//External import
const BrandModel = require("../../model/Brands/BrandsModel");
const ProductsModel = require("../../model/Products/ProductsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Brand Create
 * @access private
 * @route /api/v1/Brand/BrandCreate
 * @methud POST
 */

const BrandCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, BrandModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Brand Drop Down
 * @access private
 * @route /api/v1/Brand/BrandDropDown
 * @methud GET
 */

const BrandDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, BrandModel, { _id: 1, Name: 1 });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Brand List
 * @access private
 * @route /api/v1/Brand/BrandList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const BrandList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, BrandModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Brand Details
 * @access private
 * @route /api/v1/Brand/BrandDetails/:id
 * @methud GET
 */

const BrandDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, BrandModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Brand Update
 * @access private
 * @route /api/v1/Brand/BrandUpdate/:id
 * @methud PATCH
 */

const BrandUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, BrandModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Brand  Delete
 * @access private
 * @route /api/v1/Brand/BrandDelete/:id
 * @methud DELETE
 */

const BrandDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { BrandId: ObjectId(req.params.id) },
      ProductsModel,
    );

    if (associal) {
      throw CreateError("This Brand Associate Product");
    }

    const result = await DeleteService(req, BrandModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  BrandCreate,
  BrandDropDown,
  BrandList,
  BrandDetails,
  BrandUpdate,
  BrandDelete,
};
