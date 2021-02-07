import React, { useState } from 'react'
import Container from '../Shared/container/container'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import Input from '../Shared/Input/Input'
import Button from '../Shared/Button/Button'
import { signIn, signUp } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Auth = () => {
    // const user: any = null
    const dispatch = useDispatch()
    const [form, setForm] = useState(initialState)
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const history = useHistory()

    const handleShowPassword = () => setShowPassword(!showPassword)
    const switchMode = () => {
        setForm(initialState)
        setIsSignUp(prevIsSignUp => !prevIsSignUp)
        setShowPassword(false)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (isSignUp) {
            dispatch(signUp(form, history))
        } else {
            dispatch(signIn(form, history))
        }
    }
    const handleChange = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value })
    const googleSuccess = async (res: any) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: AUTH, data: { result, token } })

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleError = () =>
        alert('Google Sign In was unsuccessful. Try again later')
    return (
        <Container className='my-8'>
            <h3>{isSignUp ? 'Sign up' : 'Sign in'}</h3>
            <form className='' onSubmit={handleSubmit}>
                <section>
                    {isSignUp && (
                        <>
                            <Input
                                name='firstName'
                                label='First Name'
                                handleChange={handleChange}
                                autoFocus
                                half
                            />
                            <Input
                                name='lastName'
                                label='Last Name'
                                handleChange={handleChange}
                                half
                            />
                        </>
                    )}
                    <Input
                        name='email'
                        label='Email Address'
                        handleChange={handleChange}
                        type='email'
                    />
                    <Input
                        name='password'
                        label='Password'
                        handleChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        handleShowPassword={handleShowPassword}
                    />
                    {isSignUp && (
                        <Input
                            name='confirmPassword'
                            label='Repeat Password'
                            handleChange={handleChange}
                            type='password'
                        />
                    )}
                </section>
                <Button type='submit'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin
                    clientId='564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com'
                    render={renderProps => (
                        <Button
                            text='Google Sign In'
                            onButtonClicked={renderProps.onClick}
                        ></Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy='single_host_origin'
                />
                <Button onButtonClicked={switchMode}>
                    {isSignUp
                        ? 'Already have an account? Sign in'
                        : "Don't have an account? Sign Up"}
                </Button>
            </form>
        </Container>
    )
}

export default Auth
