import React, { useState, useEffect, useContext, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'
import HalfContainer from '../Shared/halfContainer/halfContainer'
import { postInterface } from '../../interfaces'
import { PopupContext, CurrentIdContext } from '../../context/context'
import Container from '../Shared/container/container'
import Button from '../Shared/Button/Button'

const Form: FC<any> = () => {
    const dispatch = useDispatch()
    const { setPopUpVisible } = useContext(PopupContext)
    const { currentId, setCurrentId } = useContext(CurrentIdContext)
    const user = JSON.parse(localStorage.getItem('profile'))

    const emptyPost: postInterface = {
        title: '',
        message: '',
        name: '',
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
            dispatch(createPost({ ...postData, name: user?.result?.name }))
        } else {
            dispatch(
                updatePost(currentId, {
                    ...postData,
                    name: user?.result?.name,
                }),
            )
        }
        clearForm()
        setPopUpVisible(false)
    }
    const clearForm = () => {
        setPostData(emptyPost)
        setCurrentId('0')
    }
    if (!user?.result?.name) {
        return (
            <section className='fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-80'>
                <Container>
                    <section className='m-32 p-6 bg-gray-50'>
                        <section className='flex justify-between'>
                            <p>Please sign in to create your memories!</p>
                            <button onClick={() => setPopUpVisible(false)}>
                                Close
                            </button>
                        </section>
                    </section>
                </Container>
            </section>
        )
    }
    return (
        <section className='fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-80'>
            <Container>
                <section className='m-32 p-6 bg-gray-50'>
                    <section className='flex justify-between'>
                        <h2 className='text-2xl'>
                            {currentId === '0'
                                ? 'Creating a Memory'
                                : `Editing "${post.title}"`}
                        </h2>
                        <button onClick={() => setPopUpVisible(false)}>
                            Close
                        </button>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <section className='my-4'>
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
                        </section>
                        <section className='my-4'>
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
                        </section>
                        <section className='my-4'>
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
                        </section>
                        <div className='flex'>
                            <HalfContainer className='mr-1'>
                                <Button
                                    type='submit'
                                    text='Submit'
                                    classes='p-1 mt-1 w-full'
                                />
                            </HalfContainer>
                            <HalfContainer className='ml-1'>
                                <Button
                                    type='submit'
                                    text='Clear Form'
                                    classes='p-1 mt-1  w-full'
                                    onButtonClicked={clearForm}
                                />
                            </HalfContainer>
                        </div>
                    </form>
                </section>
            </Container>
        </section>
    )
}

export default Form
