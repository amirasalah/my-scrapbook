import { FC, useContext } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { postComponentInterface } from '../../../interfaces'
import { PopupContext, CurrentIdContext } from '../../../context/context'
import Button from '../../Shared/Button/Button'

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
                <Button
                    classes='text-center w-full p-1 mt-1'
                    text='Like'
                    onButtonClicked={likeCurrentPost}
                />
                <Button
                    classes='text-center w-full p-1 mt-1'
                    text='Delete'
                    onButtonClicked={deleteCurrentPost}
                />
                <Button
                    classes='text-center w-full p-1 mt-1'
                    text='Edit'
                    onButtonClicked={editPost}
                />
            </section>
        </section>
    )
}

export default Post
