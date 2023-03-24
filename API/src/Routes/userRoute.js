const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
  updateEmergencyContact,
  updateProfile,
  uploadPhoto,
} = require("../Controllers/userController");
const auth = require("../middleware/auth");

const router = Router();
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);
router.post("/createAddress", [auth], updateAddress);
router.post("/emergContact", [auth], updateEmergencyContact);
router.post("/updateProfile", [auth], updateProfile);
router.post("/uploadPhoto", [auth], uploadPhoto);
module.exports = router;
