//External import
const { model, Schema } = require("mongoose");

const categoriesSchema = new Schema(
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

const CategoriesModel = new model("Categorie", categoriesSchema);
module.exports = CategoriesModel;
