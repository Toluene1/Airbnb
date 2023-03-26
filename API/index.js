const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./src/Config/config");
const Error404 = require("./src/middleware/error404");
const userRoute = require("./src/Routes/userRoute");
const auth = require("./src/middleware/auth");
const User = require("./src/Model/User");
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/user", userRoute);

//test auth
app.get("/admin", [auth], (req, res) => {
  res.status(200).json(req.user);
});

//Get request for Users
app.get("/api/v1/fetchUser", [auth], async (req, res) => {
  const { _id } = req.user;
  try {
    const users = await User.findOne({ _id: _id });
    const { Email, FirstName, LastName } = users;
    res.status(200).json({ Email, FirstName, LastName });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login before you proceed" });
  }
});

app.use(Error404); // unavailable route

// connect to db and listen to port
const start = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
