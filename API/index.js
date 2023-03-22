const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./src/Config/config");
const Error404 = require("./src/middleware/error404");
const userRoute = require("./src/Routes/userRoute");
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/user", userRoute);
app.get("/", (req, res) => {
  res.send("welcome to home");
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
