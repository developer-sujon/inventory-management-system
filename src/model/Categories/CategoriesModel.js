//External import
const { model, Schema } = require("mongoose");

const categoriesSchema = new Schema(
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

const CategoriesModel = new model("Categorie", categoriesSchema);
module.exports = CategoriesModel;
