import { FC } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'

const Post: FC<any> = ({ postData, setCurrentId }) => {
    const dispatch = useDispatch()
    const likeCurrentPost = () => {
        dispatch(likePost(postData._id))
    }
    const deleteCurrentPost = () => {
        dispatch(deletePost(postData._id))
    }
    const editPost = () => {
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
                {/* <img src={postData.selectedFile[0].base64} alt='card data' /> */}
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
