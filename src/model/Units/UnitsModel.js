//External Lib Import
const { model, Schema } = require("mongoose");

const UnitsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    UnitName: {
      type: String,
      required: true,
      unique: true,
    },
    UnitDescription: {
      type: String,
    },
    UnitStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const UnitsModel = new model("Unit", UnitsSchema);
module.exports = UnitsModel;
