const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    FirstName: {
      type: Schema.Types.String,
      required: true,
    },
    LastName: {
      type: Schema.Types.String,
      required: true,
    },
    Email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    DOB: {
      type: Schema.Types.String,
      required: true,
    },
    Avatar: {
      type: Schema.Types.String,
      default: "",
    },
    PhoneNumber: {
      type: Schema.Types.String,
      required: true,
    },
    Address: {
      type: Schema.Types.String,
      default: "",
    },

    EmergencyContact: {
      type: Schema.Types.String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = model("users", userSchema);

module.exports = User;
