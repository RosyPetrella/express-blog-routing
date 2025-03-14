const express = require("express");
const router = express.Router();
let posts = require("../immagini_e_posts/posts.js");

// index
router.get("/", (req, res) => {
  // res.send("Lista dei post");
  res.json(posts);
});

router.get("/:slug", (req, res) => {
  const postSlug = req.params.slug;
  const post = posts.find((p) => p.slug === postSlug); //
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json(post);
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
