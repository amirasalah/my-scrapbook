import { FC, useContext } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { postComponentInterface } from '../../../interfaces'
import { PopupContext, CurrentIdContext } from '../../../context/context'

const Post: FC<postComponentInterface> = ({ postData }) => {
    const dispatch = useDispatch()
    const { setPopUpVisible } = useContext(PopupContext)
    const { setCurrentId } = useContext(CurrentIdContext)
    const likeCurrentPost = () => {
        dispatch(likePost(postData._id))
    }
    const deleteCurrentPost = () => {
        dispatch(deletePost(postData._id))
    }
    const editPost = () => {
        setPopUpVisible(true)
        setCurrentId(postData._id)
    }

    return (
        <section className='border-l-4 border-blue-200'>
            <section>
                <h3 className='text-2xl pl-2 font-bold mb-2'>
                    {postData.title}
                </h3>
                <p className='pl-2 mb-2'>{postData.message}</p>
                <section className='p-2'>
                    <p>
                        <span className='text-lg font-bold'>Post by:</span>{' '}
                        {postData.creator}
                    </p>
                    <p>
                        <span className='text-lg font-bold'>Date:</span>{' '}
                        {moment(postData.createdAt).fromNow()}
                    </p>
                    <p>
                        <span className='text-lg font-bold'>Likes:</span>{' '}
                        {postData.likeCount}
                    </p>
                </section>
            </section>
            <section className='p-2'>
                <p>
                    <span className='text-lg font-bold'>Tags:</span>{' '}
                    {postData.tags}
                </p>
            </section>
            <section className='p-2'>
                <button
                    className='text-center w-full p-1 mt-1 block bg-blue-200 font-bold'
                    onClick={likeCurrentPost}
                >
                    Like
                </button>
                <button
                    className='text-center w-full p-1 mt-1 block bg-blue-200 font-bold'
                    onClick={deleteCurrentPost}
                >
                    Delete
                </button>
                <button
                    className='text-center w-full p-1 mt-1 block bg-blue-200 font-bold'
                    onClick={editPost}
                >
                    Edit
                </button>
            </section>
        </section>
    )
}

export default Post
