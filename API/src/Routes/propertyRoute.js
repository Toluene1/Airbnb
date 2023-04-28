const { Router } = require("express");
const {
  createProperty,
  uploadPropertyImages,
} = require("../Controllers/propertyController");
const auth = require("../middleware/auth");
const router = Router();
router.post("/create", [auth], createProperty);
router.post("/uploadimages", [auth], uploadPropertyImages);
module.exports = router;
