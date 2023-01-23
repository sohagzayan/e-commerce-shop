const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getAllReview,
  deleteProductReview,
} = require("../controllers/productControllers");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/products/get").post(getAllProduct);
router.route("/products/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

router.route("/review").put(createProductReview);
router.route("/reviews").get(getAllReview).delete(deleteProductReview);
module.exports = router;
