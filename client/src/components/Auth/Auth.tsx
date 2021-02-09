import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import Container from '../Shared/container/container'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import Input from '../Shared/Input/Input'
import Button from '../Shared/Button/Button'
import { signIn, signUp } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes'
import { formDataInterface } from '../../interfaces'

const initialFormState: formDataInterface = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Auth: FC<any> = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState<formDataInterface>(initialFormState)
    const [isSignUp, setIsSignUp] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const history = useHistory()

    const switchMode = (): void => {
        setForm(initialFormState)
        setIsSignUp(prevIsSignUp => !prevIsSignUp)
        setShowPassword(false)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (isSignUp) {
            dispatch(signUp(form, history))
        } else {
            delete form.confirmPassword
            delete form.firstName
            delete form.lastName
            dispatch(signIn(form, history))
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
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

    const googleError = (): void =>
        alert('Google Sign In was unsuccessful. Try again later')
    return (
        <Container className='my-8'>
            <h3>{isSignUp ? 'Sign up' : 'Sign in'}</h3>
            <form className='' onSubmit={handleSubmit}>
                <section className='flex flex-col'>
                    {isSignUp && (
                        <>
                            <Input
                                name='firstName'
                                type='text'
                                required
                                label='First Name'
                                handleChange={handleChange}
                            />
                            <Input
                                name='lastName'
                                type='text'
                                required
                                label='Last Name'
                                handleChange={handleChange}
                            />
                        </>
                    )}
                    <Input
                        name='email'
                        required
                        label='Email Address'
                        handleChange={handleChange}
                        type='email'
                    />
                    <Input
                        name='password'
                        label='Password'
                        required
                        handleChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                    />
                    {isSignUp && (
                        <Input
                            name='confirmPassword'
                            label='Repeat Password'
                            required
                            handleChange={handleChange}
                            type='password'
                        />
                    )}
                </section>
                <Button type='submit'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin
                    clientId='535983022986-u1q65ut3ul7m0vbsv14lib3uis997tdl.apps.googleusercontent.com'
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
