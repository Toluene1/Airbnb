const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
  updateEmergencyContact,
  updateProfile,
} = require("../Controllers/userController");
const auth = require("../middleware/auth");

const router = Router();
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);
router.post("/createAddress", [auth], updateAddress);
router.post("/createContact", [auth], updateEmergencyContact);
router.post("/updateProfile", [auth], updateProfile);
module.exports = router;
