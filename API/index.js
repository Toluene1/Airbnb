const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./src/Config/config");
const Error404 = require("./src/middleware/error404");
const userRoute = require("./src/Routes/userRoute");
const auth = require("./src/middleware/auth");
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/user", userRoute);

//test auth
app.get("/admin", [auth], (req, res) => {
  res.status(200).json(req.user);
});

app.use(Error404); // unavailable route

// connect to db and listen to port
const start = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
