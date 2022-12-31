const UserViewingHistory = require("../models/UserViewingHistory");
const Product = require("../models/productModel");
exports.viewingHistory = tryCatch(async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  const historyEntry = await UserViewingHistory.findOne({
    userId: userId,
    productId: productId,
  });

  if (!historyEntry) {
    const product = await Product.findById(productId);
    product.viewCount += 1;
    await product.save();
    const historyEntry = new UserViewingHistory({
      userId: userId,
      productId: productId,
    });
    await historyEntry.save();
    res.status(200).json({
      success: true,
      incremented: true,
    });
  } else {
    res.status(200).json({
      success: true,
      incremented: false,
    });
  }
});
