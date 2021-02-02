import React, { Dispatch, FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'
import { CurrentIdContext } from '../context/context'
import { Header } from './Header/header'
import Posts from './Posts/Posts'
import Container from './Shared/container/container'
import HalfContainer from './Shared/halfContainer/halfContainer'

const App: FC<any> = () => {
    const [currentId, setCurrentId] = useState<string>('0')

    const dispatch = useDispatch<Dispatch<any>>()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <Header />
            <Container className='flex justify-center'>
                <HalfContainer>
                    <CurrentIdContext.Provider
                        value={{ currentId, setCurrentId }}
                    >
                        <Posts />
                    </CurrentIdContext.Provider>
                </HalfContainer>
            </Container>
        </>
    )
}
export default App
