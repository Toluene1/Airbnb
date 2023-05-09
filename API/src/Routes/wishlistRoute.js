const { Router } = require("express");
const {
  createWishlist,
  getWishlist,
} = require("../Controllers/wishlistcontroller");
const router = Router();
router.post("/create", createWishlist);
router.get("/", getWishlist);

module.exports = router;
