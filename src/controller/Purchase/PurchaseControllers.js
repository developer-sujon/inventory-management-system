//Internal import
const mongoose = require("mongoose");

//External import
const ParentModel = require("../../model/Purchase/PurchaseSummaryModel");
const ChildModel = require("../../model/Purchase/PurchaseModel");
const CreateParentChildService = require("../../services/Common/CreateParentChildService");
const ListOneJoinService = require("../../services/Common/ListOneJoinService");
const DeleteParentChildService = require("../../services/Common/DeleteParentChildService");

/**
 * @desc Purchase Create
 * @access private
 * @route /api/v1/Purchase/PurchaseCreate
 * @methud POST
 */

const PurchaseCreate = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const result = await CreateParentChildService(
      req,
      ParentModel,
      ChildModel,
      "PurchaseSummaryId",
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
 * @desc Purchase List
 * @access private
 * @route /api/v1/Purchase/PurchaseList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const PurchaseList = async (req, res, next) => {
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
 * @desc Purchase Delete
 * @access private
 * @route /api/v1/Purchase/PurchaseDelete/:id
 * @methud DETELE
 */

const PurchaseDelete = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const result = await DeleteParentChildService(
      req,
      ParentModel,
      ChildModel,
      "PurchaseSummaryId",
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
  PurchaseCreate,
  PurchaseList,
  PurchaseDelete,
};
