const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logOut").get(logOutUser);

module.exports = router;
