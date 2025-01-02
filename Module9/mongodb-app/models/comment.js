const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the comment schema
const commentSchema = new Schema({
    commentId: { type: String, required: true, unique: true }, // Unique identifier for each comment
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true }, // Reference to the post
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
    commentText: { type: String, required: true, trim: true }, // The comment content
    createdAt: { type: Date, default: Date.now } // Timestamp for when the comment was made
});

module.exports = mongoose.model("comment", commentSchema);
