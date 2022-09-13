//External Import
const ObjectId = require("mongoose").Types.ObjectId;

//External import
const { CreateError } = require("../../helper/ErrorHandler");
const ProductModel = require("../../model/Products/ProductsModel");
const ReturnsModel = require("../../model/SalesReturn/SalesReturnsModel");
const SalesModel = require("../../model/Sales/SalesModel");
const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DeleteService = require("../../services/Common/DeleteService");
const ListTwoJoinService = require("../../services/Common/ListTwoJoinService");
const UpdateService = require("../../services/Common/UpdateService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Product Create
 * @access private
 * @route /api/v1/Product/ProductCreate
 * @methud POST
 */

const ProductCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, ProductModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Product List
 * @access private
 * @route /api/v1/Product/ProductList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ProductList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { ProductName: SearchRgx },
    { ProductUnit: SearchRgx },
    { ProductDetails: SearchRgx },
    { "ProductBrand.Name": SearchRgx },
    { "ProductCategory.Name": SearchRgx },
  ];
  const JoinStageOne = {
    $lookup: {
      from: "brands",
      localField: "BrandId",
      foreignField: "_id",
      as: "ProductBrand",
    },
  };

  const JoinStageTwo = {
    $lookup: {
      from: "categories",
      localField: "CategoryId",
      foreignField: "_id",
      as: "ProductCategory",
    },
  };

  const projection = {
    $project: {
      ProductName: 1,
      ProductBrand: { $first: "$ProductBrand.Name" },
      ProductCategory: { $first: "$ProductCategory.Name" },
      ProductUnit: 1,
      ProductDetails: 1,
    },
  };

  try {
    const result = await ListTwoJoinService(
      req,
      ProductModel,
      SearchArray,
      JoinStageOne,
      JoinStageTwo,
      projection,
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Product Details
 * @access private
 * @route /api/v1/Product/ProductDetails/:id
 * @methud GET
 */

const ProductDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, ProductModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Product Update
 * @access private
 * @route /api/v1/Product/ProductUpdate/:id
 * @methud PATCH
 */

const ProductUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, ProductModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Product  Delete
 * @access private
 * @route /api/v1/Product/ProductDelete/:id
 * @methud DELETE
 */

const ProductDelete = async (req, res, next) => {
  try {
    const associalSales = await CheckAssociateService(
      { ProductId: ObjectId(req.params.id) },
      SalesModel,
    );

    if (associalSales) {
      throw CreateError("This Product Associate Sales");
    }

    const associalReturn = await CheckAssociateService(
      { ProductId: ObjectId(req.params.id) },
      ReturnsModel,
    );

    if (associalReturn) {
      throw CreateError("This Product Associate Return");
    }

    const result = await DeleteService(req, ProductModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ProductCreate,
  ProductList,
  ProductDetails,
  ProductUpdate,
  ProductDelete,
};
