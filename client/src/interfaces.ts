export interface postInterface {
    title: string
    message: string
    creator: string
    tags: string[]
    selectedFile: []
    likeCount?: number
    createdAt?: string
    _id?: string
}
export interface dispatchInterface {
    type: string
    payload: postInterface[]
}
