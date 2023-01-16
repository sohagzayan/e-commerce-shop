const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUserRole,
  getSingleUserForUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logOut").get(logOutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRole("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRole("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRole("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRole("admin"), deleteUser);
router.route("/user/:id").get(isAuthenticatedUser, getSingleUserForUser);

module.exports = router;
