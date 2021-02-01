import * as api from '../api'
import {
    fetch_All_Posts,
    create_Post,
    update_Post,
    delete_Post,
    like_Post,
} from '../constants/actionTypes'
import { postInterface, dispatchInterface } from '../interfaces'

export const getPosts = () => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const data = await api.fetchPosts()
        dispatch({ type: fetch_All_Posts, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const createPost = (newPost: postInterface) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({ type: create_Post, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const updatePost = (id: string, post: postInterface) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: update_Post, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const deletePost = (id: string) => async (
    dispatch: (arg0: { type: string; payload: string }) => void,
) => {
    try {
        await api.deletePost(id)
        dispatch({ type: delete_Post, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}
export const likePost = (id: string) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: like_Post, payload: data })
    } catch (error) {}
}
