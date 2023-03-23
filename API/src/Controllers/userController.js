const ev = require("../Events/emailHandler");
const emailOtp = require("../Model/Emailotp");
const User = require("../Model/User");
const createJWT = require("../utils/jwt");

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
      res.status(200).json({ message: "otp sent " });
      return;
    }

    await emailOtp.findOneAndUpdate(
      { Email: email },
      { otp: new_Otp },
      { new: true }
    );
    ev.emit("mail", message, email);
    res.status(200).json({ message: "otp sent " });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
    console.log(error);
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
    res.status(200).json({ user: regUser, token });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    const token = createJWT(user._id);
    res.status(200).json({ message: "user created", user, token });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};

const updateAddress = async (req, res) => {
  const { country, suite, street, city, state, zipcode } = req.body;

  try {
    const newAddress =
      suite +
      " " +
      street +
      " " +
      city +
      " " +
      state +
      " " +
      country +
      " " +
      zipcode;

    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { Address: newAddress },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};
const updateEmergencyContact = async (req, res) => {
  const { name, relationship, language, email, phoneNumber } = req.body;

  try {
    const newContact =
      name +
      ", " +
      relationship +
      ", " +
      email +
      ", " +
      phoneNumber +
      ", " +
      language +
      " ";

    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { EmergencyContact: newContact },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  const { about, language, location, work } = req.body;

  try {
    const { _id } = req.user;
    const user = await User.findOneAndUpdate(
      { _id: _id },
      { About: about, Language: language, Work: work, Location: location },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};
module.exports = {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  updateAddress,
  updateEmergencyContact,
  updateProfile,
};
