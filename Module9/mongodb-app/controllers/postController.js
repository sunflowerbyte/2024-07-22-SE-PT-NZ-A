"use strict";
const Models = require('../models');

const getPosts = (req, res) => {
  Models.Post.find({})
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const getPostById = (req, res) => {
  Models.Post.findById(req.params.id)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const createPost = (req, res) => {
  new Models.Post(req.body)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const updatePost = (req, res) => {
  Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const deletePost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
