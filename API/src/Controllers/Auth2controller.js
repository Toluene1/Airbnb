const User = require("../Model/User");
const axios = require("axios");
const createJWT = require("../utils/jwt");

const GoogleAuth = async (req, res) => {
  const { token } = req.body;
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { email, given_name, family_name, picture } = response.data;
    const existing_User = await User.findOne({ Email: email });
    console.log(existing_User);

    if (existing_User) {
      const token = createJWT(existing_User._id);
      res.status(200).json({ token: token, user: existing_User });
      return;
    }
    const user = await User.create({
      Email: email,
      FirstName: given_name,
      LastName: family_name,
      Avatar: picture || "",
    });
    const new_token = createJWT(user._id);
    res.status(200).json({ token: new_token, user: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "please contact admin" });
  }
};

module.exports = GoogleAuth;
