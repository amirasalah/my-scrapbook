import React, { useContext } from 'react'
import { CurrentIdContext, PopupContext } from '../../../context/context'
import Button from '../../Shared/Button/Button'

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
            <Button
                text='Add new Memory'
                classes='p-1 mt-1'
                onButtonClicked={addNewMemory}
            />
        </section>
    )
}
