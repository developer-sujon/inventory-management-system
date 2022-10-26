//External Lib Import
const { model, Schema } = require("mongoose");

const ModelsSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ModelName: {
      type: String,
      required: true,
      unique: true,
    },
    ModelDescription: {
      type: String,
    },
    ModelStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const ModelsModel = new model("Model", ModelsSchema);
module.exports = ModelsModel;
