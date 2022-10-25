//External import
const { model, Schema } = require("mongoose");

const CustomersSchema = new Schema(
  {
    UserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    CustomerName: {
      type: String,
      required: true,
    },
    CustomerAvatar: {
      type: String,
      required: true,
    },
    CustomerEmail: {
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
    CustomerPhone: {
      type: String,
      required: true,
      unique: true,
    },
    CustomerAddress: String,
  },
  { timestamps: true, versionKey: false },
);

const CustomersModel = new model("Customer", CustomersSchema);
module.exports = CustomersModel;
