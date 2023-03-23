const { Schema, model } = require("mongoose");

const userOtp = new Schema({
  Email: {
    type: Schema.Types.String,

    trim: true,
  },
  otp: {
    type: Schema.Types.String,
    required: true,
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
