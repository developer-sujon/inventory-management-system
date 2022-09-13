//External import
const { model, Schema } = require("mongoose");

const BrandsSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const BrandsModel = new model("Brand", BrandsSchema);
module.exports = BrandsModel;
