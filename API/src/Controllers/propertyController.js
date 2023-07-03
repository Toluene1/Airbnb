const Property = require("../Model/Property");
const formidable = require("formidable");
const cloudinary = require("../utils/cloudinary");

const createProperty = async (req, res) => {
  const { _id } = req.user;

  try {
    const property = await Property.create({
      host: _id,
    });
    res.status(200).json({ prop: property._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const updateProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const updatePropertyLocation = async (req, res) => {
  const { id } = req.params;

  try {
    const property = await Property.findOneAndUpdate(
      { _id: id },
      { Location: req.body },
      {
        new: true,
      },
    );

    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const uploadPropertyImages = async (req, res) => {
  try {
    const { id } = req.params;
    const { Email } = req.user;
    const imagesUri = [];
    const uploadResults = [];
    const images = [];
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) throw new Error(err);
      const fileArray = Object.values(files);

      for (let index = 0; index < fileArray.length; index++) {
        imagesUri.push(fileArray[index].filepath);
      }

      for (let i = 0; i < imagesUri.length; i++) {
        const result = await cloudinary.uploader.upload(imagesUri[i], {
          folder: Email,
        });
        uploadResults.push(result);
      }

      for (let index = 0; index < uploadResults.length; index++) {
        images.push(uploadResults[index].secure_url);
      }

      const property = await Property.findOneAndUpdate(
        { _id: id },
        { images: images },
        { new: true },
      );
      res.status(200).json({ prop: property });
    });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
    console.log(error);
  }
};

const findProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findOne({ _id: id }).populate("host");
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};
const findPropertynoAuth = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findOne({ _id: id }).populate("host");
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const getHostProperty = async (req, res) => {
  const { _id } = req.user;

  try {
    const property = await Property.find({ host: _id });
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const deleteHostProperty = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  try {
    await Property.findOneAndDelete({ host: _id, _id: id });
    const prop = await Property.find({ host: _id });
    res.status(200).json({ prop: prop });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const editHostProperty = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  try {
    const property = await Property.findOne({ host: _id, _id: id });
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

const getAllProperty = async (req, res) => {
  const {
    structure,
    privacy,
    Bedrooms,
    Beds,
    Bathrooms,
    Amenities,
    minPrice,
    maxPrice,
  } = req.query;

  const queryObject = {};
  if (structure) {
    queryObject.structure = structure;
  }
  if (privacy) {
    queryObject.privacy = privacy;
  }

  if (Bedrooms) {
    queryObject.Bedrooms = Bedrooms;
  }
  if (Beds) {
    queryObject.Beds = Beds;
  }
  if (Bathrooms) {
    queryObject.Bathrooms = Bathrooms;
  }
  if (Amenities) {
    const amenities = Amenities.split(",");
    queryObject.Amenities = { $all: amenities };
  }
  if (minPrice && maxPrice) {
    queryObject.price = {
      $gte: minPrice,
      $lte: maxPrice,
    };
  }
  try {
    const property = await Property.find(queryObject).populate("host");
    res.status(200).json({ prop: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "please contact the admin " });
  }
};

module.exports = {
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
};
