const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product price"],
    maxLength: [9, "Price can't exceed 8 character"],
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  deliveryAvailable: {
    type: String,
    default: "free",
  },
  CouponCode: {
    type: String,
  },
  image: [
    {
      publicId: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter category name"],
  },
  gender: {
    type: String,
    default: "unisex",
  },
  colorVariant: {
    type: [String],
    default: [],
  },
  sizeVariant: {
    type: [String],
    default: [],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter product stock"],
    maxLength: [4, "Stock can't exceed 4 character"],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
