import { authReducerInterface } from './../interfaces'
import { AUTH, LOGOUT } from '../constants/actionTypes'

const initialValues: authReducerInterface = {
    authData: null,
    errors: null,
    loading: false,
}
const authReducer = (state = initialValues, action: any) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return {
                ...state,
                authData: action?.data,
                // loading: false,
                // errors: null,
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                authData: null,
                // loading: false,
                // errors: null,
            }
        default:
            return state
    }
}

export default authReducer
