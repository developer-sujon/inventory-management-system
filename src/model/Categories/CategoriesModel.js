//External Lib Import
const { model, Schema } = require("mongoose");

const categoriesSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CategoryName: {
      type: String,
      required: true,
      unique: true,
    },
    CategoryDetails: {
      type: String,
    },
    CategoryStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const CategoriesModel = new model("Categorie", categoriesSchema);
module.exports = CategoriesModel;
