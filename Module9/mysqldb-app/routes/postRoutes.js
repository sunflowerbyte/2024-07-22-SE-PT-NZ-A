const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/posts
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPostById(res);
});

// matches POST requests sent to /api/posts/create
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Update a post
router.put("/:id", (req, res) => {
    Controllers.postController.updatePost(req, res);
  });
  
  // matches DELETE requests to /api/users/123 (123 in id param)
  router.delete("/:id", (req, res) => {
    Controllers.postController.deletePost(req, res);
  });

module.exports = router;
