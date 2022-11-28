const tryCatch = require("../middleware/tryCatch");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// create product  -> admin
exports.createProduct = tryCatch(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

// get all product  -> admin
exports.getAllProduct = tryCatch(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

//  update product -> admin
exports.updateProduct = tryCatch(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });
  res.status(200).json({ success: true, product });
});

// delete a product -> admin
exports.deleteProduct = tryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  await product.remove();

  res.status(200).json({ success: true, message: "Product deleted" });
});

// get product single product
exports.getProductDetails = tryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  res.status(200).json({ success: true, product });
});
