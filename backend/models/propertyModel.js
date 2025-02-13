const mongoose = require("mongoose");

const propertyDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    keyFeatures: { type: [String], required: true },
    isFav: { type: Boolean, default: false },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    owner: { type: String, required: true },
    reviews: { type: [String], default: [] },
  },
  { timestamps: true }
);

const PropertyData = mongoose.model(
  "propertyData",
  propertyDataSchema,
  "propertyDatas"
);

module.exports = PropertyData;
