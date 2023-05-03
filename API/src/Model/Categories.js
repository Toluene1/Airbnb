const { Schema, model } = require("mongoose");

const Category = new Schema({
  structure: {
    type: Schema.Types.String,
    default: "",
  },
});

const Categories = model("category", Category);

module.exports = Categories;
