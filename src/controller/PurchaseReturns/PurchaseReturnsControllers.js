//Internal import
const mongoose = require("mongoose");

//External import
const ParentModel = require("../../model/PurchaseReturns/PurchaseReturnsSummaryModel");
const ChildModel = require("../../model/PurchaseReturns/PurchaseReturnsModel");
const CreateParentChildService = require("../../services/Common/CreateParentChildService");
const ListOneJoinService = require("../../services/Common/ListOneJoinService");
const DeleteParentChildService = require("../../services/Common/DeleteParentChildService");

/**
 * @desc Purchase Returns Create
 * @access private
 * @route /api/v1/PurchaseReturns/PurchaseReturnsCreate
 * @methud POST
 */

const PurchaseReturnsCreate = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const result = await CreateParentChildService(
      req,
      ParentModel,
      ChildModel,
      "PurchaseReturnsSummaryId",
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
 * @desc Purchase Returns List
 * @access private
 * @route /api/v1/PurchaseReturns/PurchaseReturnsList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const PurchaseReturnsList = async (req, res, next) => {
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
    { "Supplier.SupplierName": SearchRgx },
    { "Supplier.SupplierEmail": SearchRgx },
    { "Supplier.SupplierPhone": SearchRgx },
    { "Supplier.SupplierAddress": SearchRgx },
  ];
  const JoinStage = {
    $lookup: {
      from: "suppliers",
      localField: "SupplierId",
      foreignField: "_id",
      as: "Supplier",
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
      Supplier: {
        SupplierName: 1,
        SupplierEmail: 1,
        SupplierPhone: 1,
        SupplierAddress: 1,
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
 * @desc Purchase Returns Delete
 * @access private
 * @route /api/v1/PurchaseReturns/PurchaseReturnsDelete/:pageNumber/:perPage/:searchKeyword
 * @methud DETELE
 */

const PurchaseReturnsDelete = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const result = await DeleteParentChildService(
      req,
      ParentModel,
      ChildModel,
      "PurchaseReturnsSummaryId",
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
  PurchaseReturnsCreate,
  PurchaseReturnsList,
  PurchaseReturnsDelete,
};
