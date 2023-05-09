const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../Controllers/categoryController");
const router = Router();
router.get("/createcategory/", createCategory);
router.get("/getallcategory/", getAllCategories);
module.exports = router;
