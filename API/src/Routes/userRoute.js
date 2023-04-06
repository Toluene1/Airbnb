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
  updateEmail,
  updateNames,
  updatePhone,
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
router.post("/updateEmail", [auth], updateEmail);
router.post("/updateName", [auth], updateNames);
router.post("/updatePhone", [auth], updatePhone);
module.exports = router;
