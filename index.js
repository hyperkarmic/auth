const express = require("express");

const app = express();
const mongoose = require("mongoose");

// connect to db
mongoose.connect(
  "mongodb+srv://hyperkarma:mibapab23@cluster0.1umtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
