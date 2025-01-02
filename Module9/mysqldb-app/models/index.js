"use strict";
const User = require("./user");
const Comment = require("./comment");
const Post = require("./post");
const Like = require("./like"); //require the model

async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();

  // sync the model
  // also sync any extra models here
}

Post.belongsTo(User);
User.hasMany(Post);

init();
module.exports = {
  User,
  User,
  Post,
  Comment,
  Like, // export the model
  // also export any extra models here
};
