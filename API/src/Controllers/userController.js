const ev = require("../Events/emailHandler");
const emailOtp = require("../Model/Emailotp");
const User = require("../Model/User");
const createJWT = require("../utils/jwt");
const formidable = require("formidable");
const cloudinary = require("../utils/cloudinary");

const createEmailOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const new_Otp = Math.floor(100000 + Math.random() * 900000);
    const message = `welcome to Airbnb ${email} please verify your email with the ${new_Otp}`;
    const existing_Otp = await emailOtp.findOne({ Email: email });

    if (!existing_Otp) {
      await emailOtp.create({
        otp: new_Otp,
        Email: email,
        createdAt: Date.now(),
        expirededAt: Date.now() + 3600000,
      });

      ev.emit("mail", message, email);
      res.status(200).json({ message: "otp sent" });
      return;
    }

    await emailOtp.findOneAndUpdate(
      { Email: email },
      { otp: new_Otp },
      { new: true },
    );
    ev.emit("mail", message, email);
    res.status(200).json({ message: "otp sent " });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
  }
};

const verifyEmailOtp = async (req, res) => {
  try {
    const { user_Otp } = req.body;

    const userfound = await emailOtp.findOne({ otp: user_Otp });
    if (!userfound) {
      res.status(403).json({ message: "icorrect Otp " });
      return;
    }
    const { Email } = userfound;
    const regUser = await User.findOne({ Email: Email });

    if (!regUser) {
      res.status(200).json({ message: "proceed to create account" });
      return;
    }
    const token = createJWT(regUser._id);
    res.status(200).json({ token: token, user: regUser });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const message = `welcome to Airbnb ${user.FirstName}, enjoy your experience with Airbnb`;
    ev.emit("mail", message, user.Email);
    const token = createJWT(user._id);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { ...req.body },
      { new: true },
    );
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { Address: { ...req.body } },
      { new: true },
    );

    res.status(200).json({ message: "address update", user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
  }
};
const updateEmergencyContact = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { EmergencyContact: { ...req.body } },
      { new: true },
    );

    res.status(200).json({ message: "emergencey contact updated", user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
  }
};

const updateProfile = async (req, res) => {
  const { about, language, location, work } = req.body;

  try {
    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { About: about, Language: language, Work: work, Location: location },
      { new: true },
    );

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
  }
};

const uploadPhoto = async (req, res) => {
  try {
    const { _id } = req.user;

    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) throw new Error(err);
      const filePath = files["image"].filepath;
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: _id,
        folder: "profile_pics",
        width: 300,
        crop: "scale",
      });
      const userPics = await User.findOneAndUpdate(
        { _id: _id },
        { Avatar: result.secure_url },
        { new: true },
      );
      res.status(200).json({ message: "file uploaded", user: userPics });
    });
  } catch (error) {
    res.status(500).json({ message: "img uploaded failed" });
  }
};

const getUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findOne({ _id: _id });
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: "please contact the admin" });
  }
};

module.exports = {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
  updateEmergencyContact,
  updateProfile,
  uploadPhoto,
  getUser,
  updateUser,
};
