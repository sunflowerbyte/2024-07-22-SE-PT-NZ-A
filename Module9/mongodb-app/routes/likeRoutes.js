const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Get all likes for a post
router.get("/post/:postId", (req, res) => {
  Controllers.likeController.getLikesByPostId(req, res);
});

// Add a like to a post
router.post("/post/:postId", (req, res) => {
  Controllers.likeController.addLike(req, res);
});

// Remove a like from a post
router.delete("/post/:postId/user/:userId", (req, res) => {
  Controllers.likeController.removeLike(req, res);
});

module.exports = router;
