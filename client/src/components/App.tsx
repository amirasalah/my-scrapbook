import React, { Dispatch, FC, useEffect, useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'
import { CurrentIdContext, PopupContext } from '../context/context'
import { Header } from './Header/header'
import Posts from './Posts/Posts'
import Container from './Shared/container/container'

const App: FC<any> = () => {
    const [currentId, setCurrentId] = useState<string>('0')
    const { setPopUpVisible } = useContext(PopupContext)

    const dispatch = useDispatch<Dispatch<any>>()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    const addNewMemory = () => {
        setCurrentId('0')
        setPopUpVisible(true)
    }
    return (
        <>
            <Header />

            <Container className='flex justify-center'>
                <section className='flex flex-col'>
                    <CurrentIdContext.Provider
                        value={{ currentId, setCurrentId }}
                    >
                        <section className='flex justify-between items-center border-b-2 border-fuchsia-600'>
                            <h3 className='my-8 text-4xl'>All Memories</h3>
                            <button
                                className='p-1 mt-1 block bg-blue-200 font-bold'
                                onClick={addNewMemory}
                            >
                                Add new Memory
                            </button>
                        </section>
                        <Posts />
                    </CurrentIdContext.Provider>
                </section>
            </Container>
        </>
    )
}
export default App
