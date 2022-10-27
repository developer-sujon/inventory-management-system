//External Lib Import
const { model, Schema } = require("mongoose");

const BrandsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    BrandName: {
      type: String,
      required: true,
      unique: true,
    },
    BrandDetails: {
      type: String,
    },
    BrandStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const BrandsModel = new model("Brand", BrandsSchema);
module.exports = BrandsModel;
