import { createContext } from 'react'

export const PopupContext = createContext<{
    popUpVisible: boolean
    setPopUpVisible: Function
}>({
    popUpVisible: false,
    setPopUpVisible: () => {},
})
export const CurrentIdContext = createContext<{
    currentId: string
    setCurrentId: Function
}>({
    currentId: '0',
    setCurrentId: () => {},
})
