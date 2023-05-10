const { Router } = require("express");
const {
  createWishlist,
  getWishlist,
  deleteWishlist,
} = require("../Controllers/wishlistcontroller");
const router = Router();
router.post("/create", createWishlist);
router.get("/", getWishlist);
router.delete("/:id", deleteWishlist);

module.exports = router;
