import React, { useContext } from 'react'
import { CurrentIdContext, PopupContext } from '../../../context/context'

export const TopBanner = () => {
    const { setCurrentId } = useContext(CurrentIdContext)
    const { setPopUpVisible } = useContext(PopupContext)

    const addNewMemory = () => {
        setCurrentId('0')
        setPopUpVisible(true)
    }

    return (
        <section className='flex justify-between items-center border-b-2 border-fuchsia-600'>
            <h3 className='my-8 text-4xl'>All Memories</h3>
            <button
                className='p-1 mt-1 block bg-blue-200 font-bold'
                onClick={addNewMemory}
            >
                Add new Memory
            </button>
        </section>
    )
}
