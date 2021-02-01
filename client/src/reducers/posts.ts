import { postInterface } from '../interfaces'
import {
    fetch_All_Posts,
    create_Post,
    update_Post,
    delete_Post,
    like_Post,
} from '../constants/actionTypes'
export const posts = (posts: postInterface[] = [], action: any) => {
    switch (action.type) {
        case fetch_All_Posts:
            return action.payload
        case create_Post:
            return [...posts, action.payload]
        case update_Post:
        case like_Post:
            return posts.map(post =>
                post._id === action.payload._id ? action.payload : post,
            )
        case delete_Post:
            return posts.filter(post => post._id !== action.payload)
        default:
            return posts
    }
}
