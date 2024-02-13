const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;

app.get("/", (req, res) => {
  res.json({ message: "backend API" });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log("server running on port 8000");
});
