const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// Get all comments
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

// Get a specific comment by ID
router.get("/:id", (req, res) => {
  Controllers.commentController.getCommentById(req, res);
});

// Create a new comment
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

// Update a comment
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

// Delete a comment
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
