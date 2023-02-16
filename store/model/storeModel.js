const mongoose = require("mongoose");
//const ratingSchema = require("./rating");
const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    creator_id: String,
    seller_id: String | null,
    product_ids: [String],
    type: String,
    location: {
      type: {
        type: String,
        enum: ['Point']
      },
      coordinates: {
        type: [Number]
      }
    }
  },
  { timestamps: true }
);
storeSchema.index({ location: '2dsphere' });

const Store = mongoose.model("Store", storeSchema);
module.exports = { Store, storeSchema };
