const { Router } = require("express");
const { createProperty } = require("../Controllers/propertyController");
const router = Router();
router.post("/create", createProperty);
module.exports = router;
