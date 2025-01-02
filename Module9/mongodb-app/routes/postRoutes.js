const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Get all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// Get a specific post by ID
router.get("/:id", (req, res) => {
  Controllers.postController.getPostById(req, res);
});

// Create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Update a post
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// Delete a post
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
