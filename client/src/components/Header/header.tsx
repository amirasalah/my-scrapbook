import React, { FC } from 'react'
import Container from '../Shared/container/container'

export const Header: FC<any> = () => {
    return (
        <header className='px-4 bg-red-200'>
            <Container>
                <div className='flex items-center'>
                    <p className='p-1'>Amira's Scrapbook</p>
                    <img
                        className='w-10'
                        alt='Header icon'
                        src='https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-3/512/Scrapbooking-512.png'
                    />
                </div>
            </Container>
        </header>
    )
}
