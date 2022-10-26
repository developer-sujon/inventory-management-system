//External Lib Import
const { model, Schema } = require("mongoose");

const ExpensesSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ExpenseType: {
      type: Schema.Types.ObjectId,
      ref: "ExpenseType",
      required: true,
    },
    ExpenseName: {
      type: String,
      required: true,
    },
    ExpenseAmount: {
      type: Number,
      required: true,
    },
    ExpenseNote: String,
  },
  { timestamps: true, versionKey: false },
);

const ExpensesModel = new model("Expense", ExpensesSchema);
module.exports = ExpensesModel;
