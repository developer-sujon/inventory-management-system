//External import
const { model, Schema } = require("mongoose");

const PurchaseSummarySchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    SupplierId: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
    },
    Discount: Number,
    VatTax: Number,
    ShippingCoast: Number,
    OtherCoast: Number,
    GrandTotal: Number,
    Note: String,
  },
  { timestamps: true, versionKey: false },
);

const PurchaseSummaryModel = new model(
  "PurchaseSummary",
  PurchaseSummarySchema,
);
module.exports = PurchaseSummaryModel;
