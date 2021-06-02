const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// connect to db
// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);
const authRoutes = require("./routes/auth");
// route middlewares
app.use("/api/user", authRoutes);
app.listen(3000, () => console.log("server is running..."));
