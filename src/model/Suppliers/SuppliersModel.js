//External import
const { model, Schema } = require("mongoose");

const SuppliersSchema = new Schema(
  {
    UserEmail: {
      type: String,
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
      validate: {
        validator: function (v) {
          return /(^(\+88|0088|88)?(01){1}[3456789]{1}(\d){8})$/.test(v);
        },
        message: (prop) => `Invalid Phone Number: ${prop.value}`,
      },
      unique: true,
    },
    SupplierAddress: String,
  },
  { timestamps: true, versionKey: false },
);

const SuppliersModel = new model("Supplier", SuppliersSchema);
module.exports = SuppliersModel;
