"use strict";
const Models = require('../models');

const addLike = (req, res) => {
  const { postId, id } = req.body;
  Models.Post.findByIdAndUpdate(postId, { $addToSet: { likes: id } }, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const removeLike = (req, res) => {
  const { postId, id } = req.body;
  Models.Post.findByIdAndUpdate(postId, { $pull: { likes: id } }, { new: true })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

const getLikesByPostId = (req, res) => {
  Models.Post.findById(req.params.postId)
    .then((data) => res.send({ result: 200, likes: data.likes }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports = {
  addLike,
  removeLike,
  getLikesByPostId,
};
