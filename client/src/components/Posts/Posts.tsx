import React, { FC, useState, useContext } from 'react'
import { PopupContext, CurrentIdContext } from '../../context/context'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { postInterface } from '../../interfaces'
import Portal from '../Portal/portal'
import Form from '../Form/Form'

const Posts: FC<any> = () => {
    const [popUpVisible, setPopUpVisible] = useState<boolean>(false)
    const { currentId, setCurrentId } = useContext(CurrentIdContext)

    const posts = useSelector(
        (state: { posts: postInterface[] }) => state.posts,
    )
    const addNewMemory = () => {
        setCurrentId('0')
        setPopUpVisible(true)
        console.log(currentId)
    }
    return (
        <div>
            <h3>List of posts</h3>
            {!posts.length ? (
                <div>loading...</div>
            ) : (
                <PopupContext.Provider
                    value={{ popUpVisible, setPopUpVisible }}
                >
                    <section className='grid grid-cols-3 gap-4 auto-rows-max'>
                        {posts.map((post: postInterface) => (
                            <Post postData={post} key={post._id} />
                        ))}
                    </section>
                    {popUpVisible && (
                        <Portal>
                            <Form />
                        </Portal>
                    )}
                    <button onClick={addNewMemory}>Add new Memory</button>
                </PopupContext.Provider>
            )}
        </div>
    )
}

export default Posts
