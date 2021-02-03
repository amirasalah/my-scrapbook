import React, { FC, useContext } from 'react'
import { PopupContext } from '../../context/context'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { postInterface } from '../../interfaces'
import Portal from '../Portal/portal'
import Form from '../Form/Form'

const Posts: FC<any> = () => {
    const { popUpVisible } = useContext(PopupContext)
    const posts = useSelector(
        (state: { posts: postInterface[] }) => state.posts,
    )

    return (
        <>
            <section className='my-8'>
                {!posts.length ? (
                    <div>loading...</div>
                ) : (
                    <>
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
                    </>
                )}
            </section>
        </>
    )
}

export default Posts
