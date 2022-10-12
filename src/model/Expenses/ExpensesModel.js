//External Lib Import
const { model, Schema } = require("mongoose");

const ExpensesSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ExpenceType: {
      type: Schema.Types.ObjectId,
      ref: "ExpenseType",
      required: true,
    },
    ExpenceName: {
      type: String,
      required: true,
    },
    ExpenceAmount: {
      type: Number,
      required: true,
    },
    ExpenceNote: String,
  },
  { timestamps: true, versionKey: false },
);

const ExpensesModel = new model("Expense", ExpensesSchema);
module.exports = ExpensesModel;
