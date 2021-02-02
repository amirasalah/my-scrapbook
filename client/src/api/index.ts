import axios from 'axios'
import { postInterface } from '../interfaces'

const url = 'https://amira-scrapbook.herokuapp.com/posts'

export const fetchPosts = async () => {
    const { data } = await axios.get(url)
    return data
}
export const createPost = async (newPost: postInterface) =>
    await axios.post(url, newPost)

export const updatePost = async (id: string, newPost: postInterface) =>
    await axios.patch(`${url}/${id}`, newPost)

export const deletePost = async (id: string) =>
    await axios.delete(`${url}/${id}`)

export const likePost = async (id: string) =>
    await axios.patch(`${url}/${id}/likePost`)
