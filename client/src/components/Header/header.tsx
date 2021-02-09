import React, { FC, useState, useEffect, useCallback } from 'react'
import Container from '../Shared/container/container'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Button from '../Shared/Button/Button'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'

export const Header: FC<any> = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('profile')),
    )
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logOut = useCallback(() => {
        dispatch({
            type: LOGOUT,
        })
        history.push('/')
        setUser(null)
    }, [dispatch, history])

    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken: any = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logOut()
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location, user, logOut])
    return (
        <header className='px-4 bg-red-200'>
            <Container className='py-2'>
                <section className='flex justify-between items-center'>
                    <section className='flex items-center'>
                        <p className='p-1'>
                            <Link to='/'>Amira's Scrapbook</Link>
                        </p>
                        <img
                            className='w-10'
                            alt='Header icon'
                            src='https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-3/512/Scrapbooking-512.png'
                        />
                    </section>
                    <section className='flex items-center'>
                        {user?.result ? (
                            <div className='flex items-center'>
                                {user?.result?.imageUrl && (
                                    <img
                                        className='w-8 mr-2'
                                        src={user?.result?.imageUrl}
                                        alt={user?.result?.name}
                                    />
                                )}
                                <p>{user.result.name}</p>
                                <Button
                                    onButtonClicked={logOut}
                                    classes='p-1 w-full '
                                >
                                    Log Out
                                </Button>
                            </div>
                        ) : (
                            <Button classes='p-1 w-full '>
                                <Link to='/auth'>Log In</Link>
                            </Button>
                        )}
                    </section>
                </section>
            </Container>
        </header>
    )
}
