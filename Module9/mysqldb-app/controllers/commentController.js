"use strict";
let Models = require("../models"); // matches index.js

// Get all comments
const getComments = (res) => {
  Models.Comment.find({})
    .populate("userId", "firstName lastName") // Populate user details
    .populate("postId", "title") // Populate post title
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Get comments by post ID
const getCommentsByPostId = (postId, res) => {
  Models.Comment.find({ postId: postId })
    .populate("userId", "firstName lastName") // Populate user details
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Create a new comment
const createComment = (data, res) => {
  new Models.Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Update a comment
const updateComment = (req, res) => {
  Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Delete a comment
const deleteComment = (req, res) => {
  Models.Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  getCommentsByPostId,
  createComment,
  updateComment,
  deleteComment,
};
