const Categories = require("../Model/Categories");

const createCategory = async (req, res) => {
  try {
    const categories = await Categories.create({ ...req.body });

    res.status(200).json({ prop: categories });
  } catch (error) {
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find({});
    const newCategories = categories.map((category) => category.structure);
    res.status(200).json({ category: newCategories });
  } catch (error) {
    res.status(500).json({ msg: "please contact the admin " });
  }
};
module.exports = {
  createCategory,
  getAllCategories,
};
