const { Router } = require("express");
const {
  createProperty,
  uploadPropertyImages,
  updateProperty,
  updatePropertyLocation,
} = require("../Controllers/propertyController");
const auth = require("../middleware/auth");
const router = Router();
router.post("/create", [auth], createProperty);
router.post("/updateproperty/:id", [auth], updateProperty);
router.post("/updatepropertylocation/:id", [auth], updatePropertyLocation);
router.post("/uploadimages/:id", [auth], uploadPropertyImages);
module.exports = router;