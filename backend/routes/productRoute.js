const express = require("express");
const productControllers = require("../controllers/productControllers");
const router = express.Router();

router.route("/products").get(productControllers.getAllProduct);
router.route("/products/new").post(productControllers.createProduct);
router
  .route("/products/:id")
  .put(productControllers.updateProduct)
  .delete(productControllers.deleteProduct)
  .get(productControllers.getProductDetails);

module.exports = router;
