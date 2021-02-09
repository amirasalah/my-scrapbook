import postMessage from '../models/postMessage.js'
import mongoose from 'mongoose'

const checkIdValidity = id => {
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with your provided ID')
    else {
        return
    }
}
export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getPost = async (req, res) => {
    try {
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new postMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, message, creator, selectedFile, tags } = req.body
    try {
        checkIdValidity(id)
        const updatedPost = {
            title,
            message,
            creator,
            selectedFile,
            tags,
            _id: id,
        }
        await postMessage.findByIdAndUpdate(id, updatedPost, {
            new: true,
        })
        res.json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        checkIdValidity(id)
        await postMessage.findByIdAndRemove(id)
        res.json({ message: 'Post deleted' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const likePost = async (req, res) => {
    const { id } = req.params
    if (!req.userId) return res.json({ message: 'Unauthenticated' })
    try {
        checkIdValidity(id)
        const post = await postMessage.findById(id)
        const index = post.likes.findIndex(id => id === String(req.userId))
        if (index === -1) {
            post.likes.push(req.userId)
        } else {
            post.likes = post.likes.filter(id => id !== String(req.userId))
        }
        const updatedPost = await postMessage.findByIdAndUpdate(id, post, {
            new: true,
        })

        res.json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
