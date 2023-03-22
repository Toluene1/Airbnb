const { Schema, model } = require("mongoose");

const userOtp = new Schema({
  Email: {
    type: Schema.Types.String,
    unique: true,
    trim: true,
  },
  otp: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  expirededAt: {
    type: Schema.Types.Date,
    required: true,
  },
});

const emailOtp = model("emailOtp", userOtp);

module.exports = emailOtp;
