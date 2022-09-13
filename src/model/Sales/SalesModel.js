//External import
const { model, Schema } = require("mongoose");

const SalesSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    SalesSummaryId: {
      type: Schema.Types.ObjectId,
      ref: "SalesSummary",
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

const SalesModel = new model("Sale", SalesSchema);
module.exports = SalesModel;
