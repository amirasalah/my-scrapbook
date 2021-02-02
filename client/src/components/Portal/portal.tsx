import { childrenInterface } from '../../interfaces'
import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC<childrenInterface> = ({ children }) => {
    const mount: HTMLElement = document.getElementById('portal-root')
    const el: HTMLElement = document.createElement('div')

    useEffect(() => {
        mount.appendChild(el)
        return () => mount.removeChild(el)
    }, [el, mount])

    return createPortal(children, el)
}

export default Portal
