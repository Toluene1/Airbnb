const ev = require("../Events/emailHandler");
const emailOtp = require("../Model/Emailotp");
const User = require("../Model/User");

const createEmailOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const new_Otp = Math.floor(100000 + Math.random() * 900000);
    await emailOtp.create({
      otp: new_Otp,
      Email: email,
      createdAt: Date.now(),
      expirededAt: Date.now() + 3600000,
    });

    const message = `welcome to Airbnb ${email} please verify your email with the ${new_Otp}`;
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

    //await jwt

    res.status(200).json({ message: "login successful" });
  } catch (error) {
    res.status(500).json({ message: "please contact admin" });
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });

    //await jwt

    res.status(200).json({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ message: "please contact your admin" });
    console.log(error);
  }
};
module.exports = { createEmailOtp, verifyEmailOtp, createUser };