import React, { FC } from 'react'
import { buttonInterface } from '../../../interfaces'

const Button: FC<buttonInterface> = ({
    text,
    classes,
    type,
    onButtonClicked,
    children,
}) => {
    return (
        <button
            onClick={onButtonClicked}
            type={type}
            className={`block bg-blue-200 font-bold ${classes}`}
        >
            {children ? children : text}
        </button>
    )
}

export default Button
