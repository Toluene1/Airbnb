const express = require("express");
const app = express();
// const mongoose = require("mongoose");
 const { PORT, MONGO_URL } = require("./src/Config/config");
// const Error404 = require("./src/middleware/error404");
// const userRouter = require("./src/Routes/userRoute");
// const propertyRouter = require("./src/Routes/propertyRoute");
// const categoryRouter = require("./src/Routes/categoryRoute");
// const wishlistRouter = require("./src/Routes/wishlistRoute");
// const auth = require("./src/middleware/auth");

// security packages
// const helmet = require("helmet");
// const xss = require("xss-clean");
// const cors = require("cors");

//middleware
// app.use(
//   cors({ origin: ["http://localhost:4000", "https://airbnbr34.vercel.app"] }),
// );

// app.use(helmet());
// app.use(xss());
 app.use(express.json());

// //Routes
app.get("/", (req, res) => {
  res.send("hello");
});
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/property", propertyRouter);
// app.use("/api/v1/category", categoryRouter);
// app.use("/api/v1/wishlist", [auth], wishlistRouter);

// app.use(Error404); // unavailable route

// // connect to db and listen to port
const start = async () => {
  try {
 await mongoose.connect('mongodb+srv://Mekuzd1:Emeka96@mekuzd1.i9iwfuv.mongodb.net/AirBnB?retryWrites=true&w=majority');
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
};

start();
