import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { postInterface } from '../../interfaces'

const Posts: FC<any> = ({ setCurrentId }) => {
    const posts = useSelector(
        (state: { posts: postInterface[] }) => state.posts,
    )
    return (
        <div>
            <h3>List of posts</h3>
            {!posts.length ? (
                <div>loading...</div>
            ) : (
                <section className='grid grid-cols-3 gap-4 auto-rows-max'>
                    {posts.map((post: postInterface) => (
                        <Post
                            setCurrentId={setCurrentId}
                            postData={post}
                            key={post._id}
                        />
                    ))}
                </section>
            )}
        </div>
    )
}

export default Posts
