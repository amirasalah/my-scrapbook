import { MouseEvent, ChangeEvent } from 'react'

export interface postInterface {
    title: string
    message: string
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
export interface buttonInterface {
    text?: string
    classes?: string
    type?: 'button' | 'submit' | 'reset'
    children?: JSX.Element | JSX.Element[] | string
    onButtonClicked?: (event: MouseEvent) => void
}
export interface inputInterface {
    name: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
    label: string
    required: boolean
    type?: string
}
export interface authReducerInterface {
    authData: any
    loading: boolean
    errors: any
}
export interface formDataInterface {
    firstName?: string
    lastName?: string
    email: string
    password: string
    confirmPassword?: string
}
