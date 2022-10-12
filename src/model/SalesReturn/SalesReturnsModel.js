//External import
const { model, Schema } = require("mongoose");

const SalesReturnsSchema = new Schema(
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
    SalesReturnsSummaryId: {
      type: Schema.Types.ObjectId,
      ref: "SalesReturnsSummary",
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

const SalesReturnsModel = new model("SalesReturn", SalesReturnsSchema);
module.exports = SalesReturnsModel;
