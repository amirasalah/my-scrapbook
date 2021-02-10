import * as api from '../api'
import {
    FETCH_ALL,
    CREATE,
    DELETE,
    LIKE,
    UPDATE,
} from '../constants/actionTypes'
import { postInterface, dispatchInterface } from '../interfaces'

export const getPosts = () => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const data = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const createPost = (newPost: postInterface) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const updatePost = (id: string, post: postInterface) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
export const deletePost = (id: string) => async (
    dispatch: (arg0: { type: string; payload: string }) => void,
) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message)
    }
}
export const likePost = (id: string) => async (
    dispatch: (arg0: dispatchInterface) => void,
) => {
    const user = JSON.parse(localStorage.getItem('profile'))

    try {
        const { data } = await api.likePost(id, user?.token)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {}
}
