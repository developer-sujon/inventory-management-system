//External import
const { model, Schema } = require("mongoose");

const PurchaseReturnsSummarySchema = new Schema(
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

const PurchaseReturnsSummaryModel = new model(
  "PurchaseReturnsSummary",
  PurchaseReturnsSummarySchema,
);
module.exports = PurchaseReturnsSummaryModel;
