//External import
const { model, Schema } = require("mongoose");

const SuppliersSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    SupplierName: {
      type: String,
      required: true,
    },
    SupplierEmail: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
      unique: true,
    },
    SupplierPhone: {
      type: String,
      required: true,
      unique: true,
    },
    SupplierAddress: String,
    SupplierAvatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const SuppliersModel = new model("Supplier", SuppliersSchema);
module.exports = SuppliersModel;
