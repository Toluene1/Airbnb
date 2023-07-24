const Wishlist = require("../Model/wishlist");

const createWishlist = async (req, res) => {
  const { _id } = req.user;
  const { _id: propId } = req.body;

  try {
    const findProp = await Wishlist.findOne({ property: propId, user: _id });
    if (findProp) {
      return res
        .status(403)
        .json({ msg: "property already added to wish list" });
    }

    await Wishlist.create({ property: propId, user: _id });
    const wishlists = await Wishlist.find({ user: _id }).populate("property");
    res.status(200).json({
      wish: wishlists,
      msg: "property added to wishlist successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const getWishlist = async (req, res) => {
  const { _id } = req.user;
  try {
    const wishlist = await Wishlist.find({ user: _id }).populate("property");
    res.status(200).json({ wish: wishlist });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};
const deleteWishlist = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  try {
    await Wishlist.findOneAndRemove({
      _id: id,
      user: _id,
    });
    const wishlist = await Wishlist.find({ user: _id }).populate("property");
    res.status(200).json({ wish: wishlist });
  } catch (error) {
    res.status(500).json({ msg: "please contact the admin " });
  }
};

module.exports = { createWishlist, getWishlist, deleteWishlist };
