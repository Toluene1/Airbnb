const ev = require("../Events/emailHandler");
const Address = require("../Model/Address");
const emailOtp = require("../Model/Emailotp");
const EmergencyContact = require("../Model/EmergencyContact");
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
      { new: true },
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
    res.status(404).json({ message: "please contact your admin" });
    console.log(error);
  }
};

const CreateAddress = async (req, res) => {
  try {
    // const { User, Country, Street, Suite, City, State, Zipcode } = req.body;

    const address = await Address.create({ ...req.body });

    res.status(200).json({ message: "Address created", address });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};

const AddEmergencyontact = async (req, res) => {
  try {
    const AddedContact = await EmergencyContact.create({ ...req.body });

    res
      .status(200)
      .json({ message: "Emergency Contact created", AddedContact });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};

module.exports = {
  createEmailOtp,
  verifyEmailOtp,
  createUser,
  CreateAddress,
  AddEmergencyontact,
};
