const { Schema, model } = require("mongoose");

const userPayment = new Schema({
  payment: {
    cardNumber: {
      type: Schema.Types.String,
      trim: true,
    },
    expiration: {
      month: {
        type: Schema.Types.String,
        required: true,
        trim: true,
      },
      year: {
        type: Schema.Types.String,
        trim: true,
        required: true,
      },
    },
    streetAdd: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    suite: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    state: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    zipcode: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      trim: true,
      required: true,
    },
  },
});

const Payment = model("payment", userPayment);

module.exports = Payment;
