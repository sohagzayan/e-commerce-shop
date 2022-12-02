const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrder,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorizeRole("admin"), getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllOrder);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRole("admin"), updateOrderStatus)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteOrder);

module.exports = router;
