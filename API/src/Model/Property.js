const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    structure: {
      type: Schema.Types.String,
      default: "",
    },
    privacy: {
      type: Schema.Types.String,
      default: "",
    },
    Location: {
      country: {
        type: Schema.Types.String,
        default: "",
      },
      address: {
        type: Schema.Types.String,
        default: "",
      },
      city: {
        type: Schema.Types.String,
        default: "",
      },
      state: {
        type: Schema.Types.String,
        default: "",
      },
      postal_code: {
        type: Schema.Types.String,
        default: "",
      },
    },
    guests: {
      type: Schema.Types.String,
      default: "",
    },
    Bedrooms: {
      type: Schema.Types.String,
      default: "",
    },
    Beds: {
      type: Schema.Types.String,
      default: "",
    },
    Bathrooms: {
      type: Schema.Types.String,
      default: "",
    },
    Amenities: {
      type: Schema.Types.Array,
    },

    images: {
      type: Schema.Types.Array,
      default: [],
    },

    About: {
      type: Schema.Types.String,
      default: "",
    },
    description: {
      type: Schema.Types.String,
      default: "",
    },
    price: {
      type: Schema.Types.Number,
      default: 0,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  },
);

const Property = model("properties", propertySchema);

module.exports = Property;
