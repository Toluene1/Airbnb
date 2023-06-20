const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
  updateEmergencyContact,
  updateProfile,
  uploadPhoto,
  getUser,
  updateUser,
} = require("../Controllers/userController");
const auth = require("../middleware/auth");

const router = Router();
router.get("/fetchUser", [auth], getUser);
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);
router.post("/createAddress", [auth], updateAddress);
router.post("/emergContact", [auth], updateEmergencyContact);
router.post("/updateProfile", [auth], updateProfile);
router.post("/uploadPhoto", [auth], uploadPhoto);
router.post("/updateUser", [auth], updateUser);

module.exports = router;
