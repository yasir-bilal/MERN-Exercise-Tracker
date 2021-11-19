import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    activity: String,
    date: Date,
    name: String,
    creator: String,
    sets: Number,
    duration: Number,
    description: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;