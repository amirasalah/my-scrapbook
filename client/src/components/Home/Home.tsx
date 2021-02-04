import React, { Dispatch, FC, useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import { TopBanner } from '../Posts/TopBanner/TopBanner'
import Container from '../Shared/container/container'
import { CurrentIdContext, PopupContext } from '../../context/context'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

const Home: FC<any> = () => {
    const [currentId, setCurrentId] = useState<string>('0')
    const [popUpVisible, setPopUpVisible] = useState<boolean>(false)

    const dispatch = useDispatch<Dispatch<any>>()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container className='flex justify-center'>
            <section className='flex flex-col'>
                <CurrentIdContext.Provider value={{ currentId, setCurrentId }}>
                    <PopupContext.Provider
                        value={{ popUpVisible, setPopUpVisible }}
                    >
                        <TopBanner />
                        <Posts />
                    </PopupContext.Provider>
                </CurrentIdContext.Provider>
            </section>
        </Container>
    )
}

export default Home
