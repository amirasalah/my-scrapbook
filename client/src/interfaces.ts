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
export interface childrenInterface {
    children: JSX.Element[] | JSX.Element
    className?: any
}
export interface postComponentInterface {
    postData: postInterface
}
