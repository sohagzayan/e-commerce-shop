const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("ViewingHistory", productSchema);
