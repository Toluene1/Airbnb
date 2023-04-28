const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGO_URL } = require("./src/Config/config");
const Error404 = require("./src/middleware/error404");
const userRouter = require("./src/Routes/userRoute");
const propertyRouter = require("./src/Routes/propertyRoute");
const auth = require("./src/middleware/auth");
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/property", [auth], propertyRouter);

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
