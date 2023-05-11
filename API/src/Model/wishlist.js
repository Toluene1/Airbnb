const { Schema, model } = require("mongoose");

const wishlist = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: "properties",
    required: true,
  },
  user: {
    type: Schema.Types.String,
    required: true,
  },
});

const Wishlist = model("wishlist", wishlist);

module.exports = Wishlist;
