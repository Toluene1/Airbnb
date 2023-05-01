const Property = require("../Model/Property");
const formidable = require("formidable");
const cloudinary = require("../utils/cloudinary");

const createProperty = async (req, res) => {
  const { _id } = req.user;

  try {
    const property = await Property.create({
      host: _id,
    });

    //find 1 property by id from req.params and populate  const prop = await Property.findOne({ _id: propId }).populate("host");
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
      console.log(files);

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
      console.log(images);

      const property = Property.findOneAndUpdate(
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

module.exports = {
  createProperty,
  uploadPropertyImages,
  updateProperty,
  updatePropertyLocation,
};
