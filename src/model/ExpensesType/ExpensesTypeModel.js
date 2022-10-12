//External Lib Import
const { model, Schema } = require("mongoose");

const ExpenseTypesSchema = new Schema(
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

const ExpenseTypesModel = new model("ExpenseType", ExpenseTypesSchema);
module.exports = ExpenseTypesModel;
