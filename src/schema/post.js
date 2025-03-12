import mongoose, { Mongoose } from "mongoose";

const postSchema = new Mongoose.Schema({
    caption: {
        type: String,
        require: true,
        minLength: 5
    },
    image: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const post = new mongoose.model("Post",postSchema);

export default post;
