const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
} = require("../Controllers/userController");
const router = Router();
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);

module.exports = router;
