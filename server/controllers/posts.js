import express from 'express';
import mongoose from 'mongoose';

import PostExercise from '../models/postExercise.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const PostExercises = await PostExercise.find();
                
        res.status(200).json(PostExercises);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostExercise.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostExercise = new PostExercise({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostExercise.save();

        res.status(201).json(newPostExercise );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { activity, date, creator, duration, sets, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, activity, date , sets, duration, description, _id: id };

    await PostExercise.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostExercise.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const setCount = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostExercise.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.counter.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostExercise.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}


export default router;