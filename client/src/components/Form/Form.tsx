import React, { useState, useEffect, useContext, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import HalfContainer from '../Shared/halfContainer/halfContainer'
import { postInterface } from '../../interfaces'
import { PopupContext, CurrentIdContext } from '../../context/context'

const Form: FC<any> = () => {
    const dispatch = useDispatch()
    const { setPopUpVisible } = useContext(PopupContext)
    const { currentId, setCurrentId } = useContext(CurrentIdContext)

    const emptyPost: postInterface = {
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: [],
    }
    const [postData, setPostData] = useState<postInterface>(emptyPost)
    const post = useSelector(
        (state: { posts: postInterface[] }) =>
            currentId &&
            state.posts.find(message => {
                return message._id === currentId
            }),
    )
    useEffect(() => {
        if (post) setPostData(post)
    }, [post])
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (currentId === '0') {
            dispatch(createPost(postData))
        } else {
            dispatch(updatePost(currentId, postData))
        }
        clearForm()
        setPopUpVisible(false)
    }
    const clearForm = () => {
        setCurrentId('0')
        setPostData(emptyPost)
    }
    return (
        <>
            <button onClick={() => setPopUpVisible(false)}>Close</button>

            <h6>
                {currentId === '0'
                    ? 'Creating a Memory'
                    : `Editing "${post.title}"`}
            </h6>
            <form onSubmit={handleSubmit}>
                <label htmlFor='creator'>Creator</label>
                <input
                    name='creator'
                    placeholder='Creator'
                    value={postData.creator}
                    className='mt-1 block w-full'
                    type='text'
                    onChange={e =>
                        setPostData({
                            ...postData,
                            creator: e.target.value,
                        })
                    }
                />
                <label htmlFor='title'>Title</label>
                <input
                    value={postData.title}
                    type='text'
                    placeholder='Title'
                    name='title'
                    className='mt-1 block w-full'
                    onChange={e =>
                        setPostData({
                            ...postData,
                            title: e.target.value,
                        })
                    }
                />
                <label htmlFor='message'>Message</label>
                <textarea
                    placeholder='Message'
                    name='message'
                    value={postData.message}
                    className='mt-1 block w-full'
                    onChange={e =>
                        setPostData({
                            ...postData,
                            message: e.target.value,
                        })
                    }
                />
                <label htmlFor='tags'>Tags (coma separated)</label>
                <input
                    name='tags'
                    placeholder='Tags'
                    value={postData.tags}
                    className='mt-1 block w-full'
                    type='text'
                    onChange={e =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(','),
                        })
                    }
                />
                <div className='flex'>
                    <HalfContainer className='mr-1'>
                        <button
                            type='submit'
                            className='p-1 mt-1 block w-full bg-blue-200'
                        >
                            Submit
                        </button>
                    </HalfContainer>
                    <HalfContainer className='ml-1'>
                        <button
                            type='submit'
                            className='p-1 mt-1 block w-full bg-blue-200'
                            onChange={clearForm}
                        >
                            Clear Form
                        </button>
                    </HalfContainer>
                </div>
            </form>
        </>
    )
}

export default Form
