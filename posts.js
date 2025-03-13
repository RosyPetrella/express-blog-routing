const express = require("express");
const router = express.Router();

// index
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// create
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

// update
router.put("/:id", (req, res) => {
  res.send(`Update un post con un nuovo id  ${req.params.id}`);
});

// Modify
router.patch("/:id", (req, res) => {
  res.send(`Modify un post con un nuovo id ${req.params.id}`);
});

// Delete
router.delete("/:id", (req, res) => {
  res.send(`Cancella un post con id ${req.params.id}`);
});

module.exports = router;
