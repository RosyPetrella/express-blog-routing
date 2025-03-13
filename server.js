const express = require("express");
const app = express();
const port = 3005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to our blog");
});
