//External Lib Import
const ObjectId = require("mongoose").Types.ObjectId;

//External Lib Import
const UnitUnit = require("../../model/Units/UnitsModel");
const ProductsUnit = require("../../model/Products/ProductsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CheckAssociateService = require("../../services/Common/CheckAssociateService");
const CreateService = require("../../services/Common/CreateService");
const DropDownService = require("../../services/Common/DropDownService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const DetailsService = require("../../services/Common/DetailsService");

/**
 * @desc Unit Create
 * @access private
 * @route /api/v1/Unit/UnitCreate
 * @methud POST
 */

const UnitCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, UnitUnit);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unit Drop Down
 * @access private
 * @route /api/v1/Unit/UnitDropDown
 * @methud GET
 */

const UnitDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, UnitUnit, { _id: 1, Name: 1 });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unit List
 * @access private
 * @route /api/v1/Unit/UnitList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const UnitList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }];

  try {
    const result = await ListService(req, UnitUnit, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unit Details
 * @access private
 * @route /api/v1/Unit/UnitDetails/:id
 * @methud GET
 */

const UnitDetails = async (req, res, next) => {
  try {
    const result = await DetailsService(req, UnitUnit);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unit Update
 * @access private
 * @route /api/v1/Unit/UnitUpdate/:id
 * @methud PATCH
 */

const UnitUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, UnitUnit);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Unit  Delete
 * @access private
 * @route /api/v1/Unit/UnitDelete/:id
 * @methud DELETE
 */

const UnitDelete = async (req, res, next) => {
  try {
    const associal = await CheckAssociateService(
      { UnitId: ObjectId(req.params.id) },
      ProductsUnit,
    );

    if (associal) {
      throw CreateError("This Unit Associate Product");
    }

    const result = await DeleteService(req, UnitUnit);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  UnitCreate,
  UnitDropDown,
  UnitList,
  UnitDetails,
  UnitUpdate,
  UnitDelete,
};
