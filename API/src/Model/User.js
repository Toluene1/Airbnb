const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    FirstName: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    LastName: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    Email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    DOB: {
      type: Schema.Types.String,
      default: "",
    },
    About: {
      type: Schema.Types.String,
      trim: true,
      default: "",
    },
    Location: {
      type: Schema.Types.String,
      default: "",
    },
    Avatar: {
      type: Schema.Types.String,
      default: "",
    },
    PhoneNumber: {
      type: Schema.Types.String,
      default: "",
    },
    Address: {
      suite: {
        type: Schema.Types.String,
        default: "",
      },
      street: {
        type: Schema.Types.String,
        default: "",
      },
      state: {
        type: Schema.Types.String,
        default: "",
      },
      country: {
        type: Schema.Types.String,
        default: "",
      },
      zipcode: {
        type: Schema.Types.String,
        default: "",
      },
    },
    Language: {
      type: Schema.Types.Array,
    },

    Work: {
      type: Schema.Types.String,
      default: "",
    },
    EmergencyContact: {
      name: {
        type: Schema.Types.String,
        default: "",
      },
      relationship: {
        type: Schema.Types.String,
        default: "",
      },
      email: {
        type: Schema.Types.String,
        default: "",
      },
      phoneNumber: {
        type: Schema.Types.String,
        default: "",
      },
      language: {
        type: Schema.Types.String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  },
);

const User = model("users", userSchema);

module.exports = User;
