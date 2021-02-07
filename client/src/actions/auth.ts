import { formDataInterface } from './../interfaces'
import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index'

export const signIn = (formData: formDataInterface, router: any) => async (
    dispatch: any,
) => {
    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData: formDataInterface, router: any) => async (
    dispatch: any,
) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}
