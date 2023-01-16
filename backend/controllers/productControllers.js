const ApiFeatures = require("../utils/apiFetures");
const tryCatch = require("../middleware/tryCatch");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/productModel");
const Reviews = require("../models/reviewModal");

// create product  -> admin
exports.createProduct = tryCatch(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

// get all product  -> admin
exports.getAllProduct = tryCatch(async (req, res, next) => {
  const {
    category,
    search,
    minPrice,
    maxPrice,
    rating,
    price,
    sorts,
    colorVariant,
    sizeVariant,
  } = req.body;
  const currentPage = req.query.page;

  const resultPerPage = 6;
  const productsCount = await Product.countDocuments();
  const skip = resultPerPage * (currentPage - 1);

  let filterObg = {};
  let sortOrderObg = {};

  if (search) {
    filterObg.name = {
      $regex: search,
      $options: "i",
    };
  }

  if (category && category.length > 0) {
    filterObg.category = category;
  }
  if ((minPrice, maxPrice)) {
    filterObg.price = {
      $gte: parseInt(minPrice),
      $lte: parseInt(maxPrice),
    };
  }
  if (rating) {
    filterObg.ratings = { $lte: parseInt(rating) };
  }
  if (colorVariant && colorVariant.length) {
    filterObg.colorVariant = { $in: colorVariant };
  }
  if (sizeVariant && sizeVariant.length) {
    filterObg.sizeVariant = { $in: sizeVariant };
  }

  if (price) {
    filterObg.price = parseInt(price);
  }

  /* exclude some field for sorting */
  if (sorts) {
    const { id, name, ...rest } = sorts;
    sortOrderObg = {
      ...rest,
    };
  }

  /* get filter product count here */
  const FilteredProductsCount = await Product.find(filterObg);

  const products = await Product.find(filterObg)
    .sort(sortOrderObg)
    .limit(resultPerPage)
    .skip(skip);
  // console.log("sorted", sortOrderObg, "Product", );
  const filteredProductsCount = FilteredProductsCount.length;
  res.status(200).json({
    success: true,
    resultPerPage,
    productsCount,
    products,
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
  const product = await Product.findById(req.params.id).populate({
    path: "reviews",
    populate: {
      path: "user",
    },
  });

  if (!product) {
    return next(new ErrorHandler("Product not founds", 404));
  }
  // await product.populate("user").execPopulate();
  res.status(200).json({ success: true, product });
});

/** Create new review or update your review */
exports.createProductReview = tryCatch(async (req, res, next) => {
  const { rating, comment, productId, name, avatar } = req.body;
  const review = {
    user: req.user._id,
    productId: productId,
    rating: Number(rating),
    comment,
  };
  let avg = 0;
  const isReviewed = await Reviews.findOne({
    productId: productId,
    user: req.user._id,
  });

  if (isReviewed) {
    await Reviews.findOneAndUpdate(
      {
        productId: productId,
        user: req.user._id,
      },
      review
    );
  } else {
    const newReview = await Reviews.create(review);
    const productReview = await Reviews.find({ productId: productId });
    const ExitProduct = await Product.findOne({ _id: productId });
    await ExitProduct.reviews.push(newReview._id);
    ExitProduct.numOfReviews = productReview.length;
    productReview.forEach((re) => {
      avg += Number(re.rating);
    });
    ExitProduct.ratings = avg / productReview.length;
    await ExitProduct.save({ validateBeforeSave: false });
  }
  // let avg = 0;

  // product.ratings = avg / product.reviews.length;

  // await product.save({ validateBeforeSave: false });
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
