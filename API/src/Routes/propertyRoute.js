const { Router } = require("express");
const {
  createProperty,
  uploadPropertyImages,
  updateProperty,
  updatePropertyLocation,
  findProperty,
  getAllProperty,
  getHostProperty,
  findPropertynoAuth,
  deleteHostProperty,
  editHostProperty,
} = require("../Controllers/propertyController");
const auth = require("../middleware/auth");
const router = Router();
router.post("/create", [auth], createProperty);
router.post("/updateproperty/:id", [auth], updateProperty);
router.post("/updatepropertylocation/:id", [auth], updatePropertyLocation);
router.post("/uploadimages/:id", [auth], uploadPropertyImages);
router.get("/findproperty/:id", [auth], findProperty);
router.get("/property/:id", findPropertynoAuth);
router.delete("/:id", [auth], deleteHostProperty);
router.get("/findhostproperty/", [auth], getHostProperty);
router.get("/edithostproperty:id", [auth], editHostProperty);
router.get("/getallproperty/", getAllProperty);
module.exports = router;
