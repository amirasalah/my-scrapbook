import axios, { AxiosResponse } from 'axios'
import { postInterface } from '../interfaces'
import { formDataInterface } from '../interfaces'

const API = axios.create({ baseURL: 'https://amira-scrapbook.herokuapp.com/' })

API.interceptors.request.use(req => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem('profile')).token
        }`
    }
    return req
})

export const fetchPosts = async () => {
    const { data } = await API.get('/posts')
    return data
}
export const createPost = async (newPost: postInterface) =>
    await API.post('/posts', newPost)

export const updatePost = async (id: string, newPost: postInterface) =>
    await API.patch(`/posts/${id}`, newPost)

export const deletePost = async (id: string) => await API.delete(`/posts/${id}`)

export const likePost = async (id: string, token: any) =>
    await API.patch(`/posts/${id}/likePost`)

export const signIn = (
    formData: formDataInterface,
): Promise<AxiosResponse<any>> => API.post('/user/signin', formData)

export const signUp = (
    formData: formDataInterface,
): Promise<AxiosResponse<any>> => API.post('/user/signup', formData)
