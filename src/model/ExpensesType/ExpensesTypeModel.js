//External Lib Import
const { model, Schema } = require("mongoose");

const ExpenseTypesSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ExpenseTypeName: {
      type: String,
      required: true,
      unique: true,
    },
    ExpenseTypeNote: {
      type: String,
    },
    ExpenseTypeStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const ExpenseTypesModel = new model("ExpenseType", ExpenseTypesSchema);
module.exports = ExpenseTypesModel;
