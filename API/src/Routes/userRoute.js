const { Router } = require("express");
const {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  CreateAddress,
  AddEmergencyontact,
} = require("../Controllers/userController");
const router = Router();
router.post("/createEmailOtp", createEmailOtp);
router.post("/verifyEmailOtp", verifyEmailOtp);
router.post("/createUser", createUser);
router.post("/createAddress", CreateAddress);
router.post("/createContact", AddEmergencyontact);

module.exports = router;
