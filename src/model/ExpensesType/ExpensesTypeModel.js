//External import
const { model, Schema } = require("mongoose");

const ExpenseTypesSchema = new Schema(
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

const ExpenseTypesModel = new model("ExpenseType", ExpenseTypesSchema);
module.exports = ExpenseTypesModel;
