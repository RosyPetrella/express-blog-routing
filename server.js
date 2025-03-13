const express = require("express");
const app = express();
const port = 3005;
const postsRouter = require("./routers/posts");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/v1/posts", postsRouter);
// app.use(express.json());

// show
app.get("/", (req, res) => {
  res.send("Welcome to our blog");
});
