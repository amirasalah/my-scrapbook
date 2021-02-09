import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    name: String,
    tags: [String],
    selectedFile: [],
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
const postMessage = mongoose.model('postMessage', postSchema)
export default postMessage
