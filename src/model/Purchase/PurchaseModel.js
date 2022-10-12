//External import
const { model, Schema } = require("mongoose");

const PurchaseSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    PurchaseSummaryId: {
      type: Schema.Types.ObjectId,
      ref: "PurchaseSummary",
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    UnitCost: {
      type: Number,
      required: true,
    },
    Total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const PurchaseModel = new model("Purchase", PurchaseSchema);
module.exports = PurchaseModel;
