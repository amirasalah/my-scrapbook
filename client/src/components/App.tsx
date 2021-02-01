import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'
import Form from './Form/Form'
import { Header } from './Header/header'
import Portal from './Portal/portal'
import Posts from './Posts/Posts'
import Container from './Shared/container/container'
import HalfContainer from './Shared/halfContainer/halfContainer'

const App: FC<any> = () => {
    const [currentId, setCurrentId] = useState<number>(0)
    const [popUpVisible, setPopUpVisible] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    const addNewMemory = () => {
        setPopUpVisible(true)
    }
    return (
        <>
            <Header />
            <Container className='flex justify-center'>
                {popUpVisible && (
                    <Portal>
                        <Form
                            currentId={currentId}
                            setCurrentId={setCurrentId}
                        />
                    </Portal>
                )}
                <HalfContainer>
                    <Posts setCurrentId={setCurrentId} />
                </HalfContainer>
                <button onClick={addNewMemory}>Add new Memory</button>
            </Container>
        </>
    )
}
export default App
