const ApiFeatures = require("../utils/apiFetures");
const tryCatch = require("../middleware/tryCatch");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/productModel");

// create product  -> admin
exports.createProduct = tryCatch(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

// get all product  -> admin
exports.getAllProduct = tryCatch(async (req, res, next) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query.clone();

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  products = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
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

/** Create new review or update your review */
exports.createProductReview = tryCatch(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.body.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = await product.reviews.find(
    (re) => re.user.toString() === require.user._id.toString()
  );
  if (!isReviewed) {
    product.reviews.forEach((re) => {
      if (re.user.toString() === require.user._id.toString())
        re.rating = rating;
      re.comment = comment;
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;

  product.reviews.forEach((re) => {
    avg += re.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).json({ success: true });
});

// get All Product Reviews
exports.getAllReview = tryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  res.status(200).json({ success: true, reviews: product.reviews });
});

// delete review
exports.deleteProductReview = tryCatch(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  const reviews = product.reviews.filter(
    (re) => re._id.toString() !== req.query.toString()
  );
  let avg = 0;
  reviews.forEach((re) => {
    avg += re.rating;
  });
  const ratings = avg / reviews.length;
  const numOfReviews = reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({ success: true });
});
