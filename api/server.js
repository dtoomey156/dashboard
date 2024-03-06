const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

// this db variable is only used to log out the connection success or failure
const db = mongoose.connection;

app.get("/", (req, res) => {
  res.json({ message: "backend API" });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

db.once("open", (_) => {
  console.log(`Database connected on ${process.env.MONGO_URL}`);
});

db.on("error", (err) => {
  console.error("Database connection error", err);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server running on ${process.env.SERVER_PORT}`);
});
