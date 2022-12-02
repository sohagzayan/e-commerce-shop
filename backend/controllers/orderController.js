const Order = require("../models/orderModel");
const tryCatch = require("../middleware/tryCatch");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/productModel");

exports.newOrder = tryCatch(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  res.status(201).json({ success: true, order });
});

/** Get Single Order */
exports.getSingleOrder = tryCatch(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return next(new ErrorHandler("Order not found with this id}", 404));
  }
  res.status(200).json({ success: true, order });
});

/** Get logged in user  Order */
exports.myOrders = tryCatch(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({ success: true, orders });
});

/** Get all Order > admin*/
exports.getAllOrder = tryCatch(async (req, res, next) => {
  const orders = await Order.find();

  let totalPrice = 0;
  orders.forEach((order) => {
    totalPrice += order.totalPrice;
  });
  res.status(200).json({ success: true, orders, totalPrice });
});

/** Update Order Status > admin */
exports.updateOrderStatus = tryCatch(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order.orderStatus === "Delivered") {
    return next(
      new ErrorHandler("You Have Already delivered this product", 400)
    );
  }
  order.orderItems.forEach(async (order) => {
    await updateStock(order.product, order.quantity);
  });

  order.orderStatus = req.body.status;
  if (order.orderStatus === "Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });
  res.status(200).json({ success: true });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save();
}

/** delete Order */
exports.deleteOrder = tryCatch(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler("Order not found with this id}", 404));
  }
  await order.remove();
  res.status(200).json({ success: true, orders, totalPrice });
});
