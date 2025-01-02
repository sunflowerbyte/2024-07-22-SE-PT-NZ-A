const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    postId: { 
        type: String, 
        unique: true, 
        required: true 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String 
    },
    likes: [
        { 
            type: Schema.Types.ObjectId, 
            ref: "User" 
        }
    ],
    comments: [
        {
            commentId: { 
                type: String, 
                required: true 
            },
            userId: { 
                type: Schema.Types.ObjectId, 
                ref: "User", 
                required: true 
            },
            commentText: { 
                type: String, 
                required: true 
            }
        }
    ],
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("post", postSchema);


// The "user" mentioned in the above line should be in
// lowercase singular form ..whereas the actual collection
// name in mongodb will be in the plural form.
// Refer to mongoose documentation for more: https://www.npmjs.com/package/mongoose
// The first argument is the singular name of your collection.
// Mongoose automatically looks for the lowercase plural version. For example, if you use
// const MyModel = mongoose.model('Ticket', mySchema);
// Then MyModel will use the tickets collection, not the Ticket collection.