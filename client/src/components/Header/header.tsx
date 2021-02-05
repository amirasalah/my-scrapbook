import React, { FC } from 'react'
import Container from '../Shared/container/container'
import { Link } from 'react-router-dom'
import Button from '../Shared/Button/Button'

export const Header: FC<any> = () => {
    const user: any = null
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
                        {user ? (
                            <div>Log Out</div>
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
