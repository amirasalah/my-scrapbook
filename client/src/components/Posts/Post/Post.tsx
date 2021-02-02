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
        <section>
            <div>
                <h6>{postData.title}</h6>
                <p>Post by: {postData.creator}</p>
                <p>Date: {moment(postData.createdAt).fromNow()}</p>
                <p>Likes: {postData.likeCount}</p>
            </div>
            <div>
                <p>{postData.message}</p>
                <p>Tags: {postData.tags}</p>
            </div>
            <div>
                <button
                    className='text-center w-full'
                    onClick={likeCurrentPost}
                >
                    Like
                </button>
                <button
                    className='text-center w-full'
                    onClick={deleteCurrentPost}
                >
                    Delete
                </button>
                <button className='text-center w-full' onClick={editPost}>
                    Edit
                </button>
            </div>
        </section>
    )
}

export default Post
