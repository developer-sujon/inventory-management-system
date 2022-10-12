//External Import
const { model, Schema } = require("mongoose");

const UsersSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    Phone: {
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
    Email: {
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
    Password: {
      type: String,
      required: true,
    },
    Roles: {
      type: String,
      enum: ["User", "MODERATOR", "ADMIN"],
      default: "User",
      required: true,
    },
    AccountStatus: {
      type: String,
      enum: ["PENDING", "ACTIVE", "REJECTED"],
      default: "ACTIVE",
      required: true,
    },
    Image: {
      type: String,
      default:
        "https://res.cloudinary.com/dtcoomque/image/upload/v1662750046/avata_i0duew.jpg",
    },
  },
  { versionKey: false, timestamps: true },
);

const UsersModel = model("User", UsersSchema);
module.exports = UsersModel;
