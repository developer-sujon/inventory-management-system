//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const CategoriesModel = require("../../model/Categories/CategoriesModel");
const ProductsModel = require("../../model/Products/ProductsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Category Create
 * @access private
 * @route /api/v1/Category/CategoryCreate
 * @methud POST
 */

const CategoryCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, CategoriesModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Category Drop Down
 * @access private
 * @route /api/v1/Category/CategoryDropDown
 * @methud GET
 */

const CategoryDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, CategoriesModel, {
      _id: 1,
      Name: 1,
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Category List
 * @access private
 * @route /api/v1/Category/CategoryList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const CategoryList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, CategoriesModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Category Details
 * @access private
 * @route /api/v1/Category/CategoryDetails/:id
 * @methud GET
 */

const CategoryDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, CategoriesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Category Update
 * @access private
 * @route /api/v1/Category/CategoryUpdate/:id
 * @methud PATCH
 */

const CategoryUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, CategoriesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Category  Delete
 * @access private
 * @route /api/v1/Category/CategoryDelete/:id
 * @methud DELETE
 */

const CategoryDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { CategoryId: ObjectId(req.params.id) },
      ProductsModel,
    );

    if (associal) {
      throw CreateError("This Category Associate Product");
    }

    const result = await DeleteService(req, CategoriesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CategoryCreate,
  CategoryDropDown,
  CategoryList,
  CategoryDetails,
  CategoryUpdate,
  CategoryDelete,
};
