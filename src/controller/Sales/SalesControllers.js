//Internal import
const mongoose = require("mongoose");

//External Lib Import
const ParentModel = require("../../model/Sales/SalesSummaryModel");
const ChildModel = require("../../model/Sales/SalesModel");
const CreateParentChildService = require("../../services/Common/CreateParentChildService");
const ListOneJoinService = require("../../services/Common/ListOneJoinService");
const DeleteParentChildService = require("../../services/Common/DeleteParentChildService");

/**
 * @desc Sales Create
 * @access private
 * @route /api/v1/Sales/SalesCreate
 * @methud POST
 */

const SalesCreate = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const result = await CreateParentChildService(
      req,
      ParentModel,
      ChildModel,
      "SalesSummaryId",
      session,
    );

    await session.commitTransaction();
    await session.endSession();

    res.status(201).json(result);
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    next(error);
  }
};

/**
 * @desc Sales List
 * @access private
 * @route /api/v1/Sales/SalesList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const SalesList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { Customer: SearchRgx },
    { Discount: SearchRgx },
    { VatTax: SearchRgx },
    { ShippingCoast: SearchRgx },
    { OtherCoast: SearchRgx },
    { GrandTotal: SearchRgx },
    { Note: SearchRgx },
    { "Customer.CustomerName": SearchRgx },
    { "Customer.CustomerEmail": SearchRgx },
    { "Customer.CustomerPhone": SearchRgx },
    { "Customer.CustomerAddress": SearchRgx },
  ];
  const JoinStage = {
    $lookup: {
      from: "customers",
      localField: "CustomerId",
      foreignField: "_id",
      as: "Customer",
    },
  };

  const projection = {
    $project: {
      Discount: 1,
      VatTax: 1,
      ShippingCoast: 1,
      OtherCoast: 1,
      GrandTotal: 1,
      createdAt: 1,
      Customer: {
        CustomerName: 1,
        CustomerEmail: 1,
        CustomerPhone: 1,
        CustomerAddress: 1,
      },
    },
  };

  try {
    const result = await ListOneJoinService(
      req,
      ParentModel,
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
 * @desc Sales Delete
 * @access private
 * @route /api/v1/Sales/SalesDelete/:id
 * @methud DETELE
 */

const SalesDelete = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const result = await DeleteParentChildService(
      req,
      ParentModel,
      ChildModel,
      "SalesSummaryId",
      session,
    );

    await session.commitTransaction();
    await session.endSession();

    res.json(result);
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    next(error);
  }
};

module.exports = {
  SalesCreate,
  SalesList,
  SalesDelete,
};
