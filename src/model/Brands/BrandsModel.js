//External import
const { model, Schema } = require("mongoose");

const BrandsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
