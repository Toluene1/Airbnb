const Property = require("../Model/Property");

const createProperty = async (req, res) => {
  const { _id } = req.user;
  const { structure } = req.body;
  try {
    const property = await Property.create({
      structure: structure,
      host: _id,
    });

    // const prop = await Property.findOne({ _id: propId }).populate("host");
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};
module.exports = { createProperty };
