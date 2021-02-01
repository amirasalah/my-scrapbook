import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'
import Form from './Form/Form'
import { Header } from './Header/header'
import Posts from './Posts/Posts'
import Container from './Shared/container/container'
import HalfContainer from './Shared/halfContainer/halfContainer'

const App: FC<any> = () => {
    const [currentId, setCurrentId] = useState<number>(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <>
            <Header />
            <Container className='flex justify-center'>
                <HalfContainer>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </HalfContainer>
                <HalfContainer>
                    <Posts setCurrentId={setCurrentId} />
                </HalfContainer>
            </Container>
        </>
    )
}
export default App
