import mongoose from 'mongoose';
import dateformat from 'dateformat';

const postSchema = mongoose.Schema({
    activity: String,
    date:  Date,
    name: String,
    creator: String,
    sets: Number,
    duration: Number,
    description: String,
    counter: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostExercise = mongoose.model('PostExercise', postSchema);

export default PostExercise;