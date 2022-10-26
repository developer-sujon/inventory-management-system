//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const ModelModel = require("../../model/Models/ModelsModel");
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
 * @desc Model Create
 * @access private
 * @route /api/v1/Model/ModelCreate
 * @methud POST
 */

const ModelCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, ModelModel);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Model Drop Down
 * @access private
 * @route /api/v1/Model/ModelDropDown
 * @methud GET
 */

const ModelDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, ModelModel, { _id: 1, Name: 1 });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Model List
 * @access private
 * @route /api/v1/Model/ModelList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ModelList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, ModelModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Model Details
 * @access private
 * @route /api/v1/Model/ModelDetails/:id
 * @methud GET
 */

const ModelDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, ModelModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Model Update
 * @access private
 * @route /api/v1/Model/ModelUpdate/:id
 * @methud PATCH
 */

const ModelUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, ModelModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Model  Delete
 * @access private
 * @route /api/v1/Model/ModelDelete/:id
 * @methud DELETE
 */

const ModelDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { ModelId: ObjectId(req.params.id) },
      ProductsModel,
    );

    if (associal) {
      throw CreateError("This Model Associate Product");
    }

    const result = await DeleteService(req, ModelModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ModelCreate,
  ModelDropDown,
  ModelList,
  ModelDetails,
  ModelUpdate,
  ModelDelete,
};
