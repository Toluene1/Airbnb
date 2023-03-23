const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
} = require("../Controllers/userController");
const auth = require("../middleware/auth");

const router = Router();
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);
router.post("/createAddress", [auth], updateAddress);
module.exports = router;
