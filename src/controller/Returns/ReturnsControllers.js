//Internal import
const mongoose = require("mongoose");

//External Lib Import
const ParentModel = require("../../model/Returns/ReturnsSummaryModel");
const ChildModel = require("../../model/Returns/PurchaseReturnsModel");
const CreateParentChildService = require("../../services/Common/CreateParentChildService");
const ListOneJoinService = require("../../services/Common/ListOneJoinService");
const DeleteParentChildService = require("../../services/Common/DeleteParentChildService");

/**
 * @desc Returns Create
 * @access private
 * @route /api/v1/Returns/ReturnsCreate
 * @methud POST
 */

const ReturnsCreate = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const result = await CreateParentChildService(
      req,
      ParentModel,
      ChildModel,
      "ReturnsSummaryId",
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
 * @desc Returns List
 * @access private
 * @route /api/v1/Returns/ReturnsList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ReturnsList = async (req, res, next) => {
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
 * @desc Returns Delete
 * @access private
 * @route /api/v1/Returns/ReturnsDelete/:pageNumber/:perPage/:searchKeyword
 * @methud DETELE
 */

const ReturnsDelete = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const result = await DeleteParentChildService(
      req,
      ParentModel,
      ChildModel,
      "ReturnsSummaryId",
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
  ReturnsCreate,
  ReturnsList,
  ReturnsDelete,
};
