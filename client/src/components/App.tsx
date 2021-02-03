import React, { Dispatch, FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'
import { CurrentIdContext, PopupContext } from '../context/context'
import { Header } from './Header/header'
import Posts from './Posts/Posts'
import { TopBanner } from './Posts/TopBanner/TopBanner'
import Container from './Shared/container/container'

const App: FC<any> = () => {
    const [currentId, setCurrentId] = useState<string>('0')
    const [popUpVisible, setPopUpVisible] = useState<boolean>(false)

    const dispatch = useDispatch<Dispatch<any>>()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <Header />

            <Container className='flex justify-center'>
                <section className='flex flex-col'>
                    <CurrentIdContext.Provider
                        value={{ currentId, setCurrentId }}
                    >
                        <PopupContext.Provider
                            value={{ popUpVisible, setPopUpVisible }}
                        >
                            <TopBanner />
                            <Posts />
                        </PopupContext.Provider>
                    </CurrentIdContext.Provider>
                </section>
            </Container>
        </>
    )
}
export default App
