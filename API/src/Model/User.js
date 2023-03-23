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
    About: {
      type: Schema.Types.String,
      default: "",
    },
    Language: {
      type: Schema.Types.String,
      default: "",
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
    Location: {
      type: Schema.Types.String,
      default: "",
    },
    Work: {
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
  }
);

const User = model("users", userSchema);

module.exports = User;
