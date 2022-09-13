//External import
const { model, Schema } = require("mongoose");

const ProductsSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    ProductName: {
      type: String,
      required: true,
    },
    BrandId: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
    CategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Categorie",
    },
    ProductUnit: String,
    ProductDetails: String,
  },
  { timestamps: true, versionKey: false },
);

const ProductsModel = new model("Product", ProductsSchema);
module.exports = ProductsModel;
